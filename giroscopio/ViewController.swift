import UIKit
import CoreMotion

class ViewController: UIViewController {
    let motionManager = CMMotionManager()

    override func viewDidLoad() {
        super.viewDidLoad()

        if motionManager.isGyroAvailable {
            motionManager.gyroUpdateInterval = 0.1
            motionManager.startGyroUpdates(to: .main) { (data, error) in
                guard let data = data else { return }
                print("Rotação no Eixo X: \(data.rotationRate.x)")
                print("Rotação no Eixo Y: \(data.rotationRate.y)")
                print("Rotação no Eixo Z: \(data.rotationRate.z)")
            }
        } else {
            print("Giroscópio não está disponível.")
        }
    }
}