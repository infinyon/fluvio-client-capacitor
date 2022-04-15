import Foundation
import Capacitor
import FluvioClientSwift

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(FluvioPlugin)
public class FluvioPlugin: CAPPlugin {

    @objc func connect(_ call: CAPPluginCall) {
         let client = Fluvio("asd");
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": "asd"
        ])
    }
}
