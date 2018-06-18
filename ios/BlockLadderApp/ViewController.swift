//
//  ViewController.swift
//  BlockLadderApp
//
//  Created by Xiaochen Dai on 6/4/18.
//  Copyright © 2018 Xiaochen Dai. All rights reserved.
//

import UIKit
import NetworkExtension
import React

class ViewController: UIViewController {

    @IBOutlet weak var connectButton: UIButton!
    
    var status: VPNStatus {
        didSet(o) {
            updateConnectButton()
        }
    }
    
    required init?(coder aDecoder: NSCoder) {
        self.status = .off
        super.init(coder: aDecoder)
        NotificationCenter.default.addObserver(self, selector: #selector(onVPNStatusChanged), name: NSNotification.Name(rawValue: kProxyServiceVPNStatusNotification), object: nil)
    }
    
    deinit {
        NotificationCenter.default.removeObserver(self)
    }
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        self.status = VpnManager.shared.vpnStatus
    }
    
    @objc func onVPNStatusChanged(){
        self.status = VpnManager.shared.vpnStatus
    }
    
    func updateConnectButton(){
        switch status {
        case .connecting:
            connectButton.setTitle("Connecting", for: UIControlState())
        case .disconnecting:
            connectButton.setTitle("Disconnecting", for: UIControlState())
        case .on:
            connectButton.setTitle("Disconnect", for: UIControlState())
        case .off:
            connectButton.setTitle("Connect", for: UIControlState())
            
        }
        connectButton.isEnabled = [VPNStatus.on,VPNStatus.off].contains(VpnManager.shared.vpnStatus)
    }

    @IBAction func tapConnectButton(_ sender: Any) {
        print("connect tap")
        if(VpnManager.shared.vpnStatus == .off){
            VpnManager.shared.connect()
        }else{
            VpnManager.shared.disconnect()
        }
    }
    
    @IBAction func openRNView(_ sender: UIButton) {
        NSLog("RN View Opened")
        let jsCodeLocation = URL(string: "./bundle.js")
        
        let rootView = RCTRootView(
            bundleURL: jsCodeLocation,
            moduleName: "BlockLadderReactNative",
            initialProperties: nil,
            launchOptions: nil
        )
        let vc = UIViewController()
        vc.view = rootView
        self.present(vc, animated: true, completion: nil)
    }
    
}

