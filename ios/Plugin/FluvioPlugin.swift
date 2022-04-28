import Foundation
import Capacitor
import FluvioClientSwift

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(FluvioPlugin)
public class FluvioPlugin: CAPPlugin {

    var clients = [Int: Fluvio]()
    var producers = [String: TopicProducer]()

    @objc func connect(_ call: CAPPluginCall) {
        let endpoint = call.getString("endpoint")!
        let tls = call.getObject("tls")!
        let domain = tls["domain"]! as! String
        let key = tls["key"]! as! String
        let cert = tls["cert"]! as! String
        let ca_cert = tls["ca_cert"]! as! String
        let nextClientId = clients.count

        let profile = FluvioProfile(endpoint, domain, key, cert, ca_cert)
        self.clients[nextClientId] = profile.connect()
        call.resolve([
            "clientId": nextClientId
        ])
    }

    @objc func produce(_ call: CAPPluginCall) {
        let clientId = call.getInt("clientId")!
        let topic = call.getString("topic") ?? ""
        let value = call.getString("value") ?? ""
        let key = call.getString("key") ?? ""

        var producer = self.producers[topic] ?? self.clients[clientId]?.topic_producer(topic)

        var value_raw_bytes_array = Array(value.utf8)
        var key_raw_bytes_array = Array(key.utf8)
        let value_bytes = UnsafeBufferPointer(start: &value_raw_bytes_array, count: value_raw_bytes_array.count)
        let key_bytes =  UnsafeBufferPointer(start: &key_raw_bytes_array, count: key_raw_bytes_array.count)

        producer?.send(key_bytes, value_bytes)

        producer?.flush()

        call.resolve()
    }
}
