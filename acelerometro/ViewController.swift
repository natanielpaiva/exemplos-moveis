import UIKit
import CoreMotion

class ViewController: UIViewController {
    let motionManager = CMMotionManager()

    override func viewDidLoad() {
        super.viewDidLoad()

        if motionManager.isAccelerometerAvailable {
            motionManager.accelerometerUpdateInterval = 0.1
            motionManager.startAccelerometerUpdates(to: .main) { (data, error) in
                guard let data = data else { return }
                print("Eixo X: \(data.acceleration.x)")
                print("Eixo Y: \(data.acceleration.y)")
                print("Eixo Z: \(data.acceleration.z)")
            }
        } else {
            print("Acelerômetro não está disponível.")
        }
    }
}