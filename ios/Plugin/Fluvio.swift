import Foundation

@objc public class Fluvio: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
