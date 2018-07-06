//
//  DiscoverViewController.swift
//  BlockLadderApp
//
//  Created by Xiaochen Dai on 2018-06-21.
//  Copyright © 2018 Xiaochen Dai. All rights reserved.
//

import Foundation
import UIKit
import React

class DiscoverViewController: UIViewController {
    
    @IBOutlet weak var reactNativeView: UIView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.launchRNView()
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
    }
    
    @IBAction func openRNView(_ sender: UIButton) {
        self.launchRNView()
    }
    
    func launchRNView() {
        NSLog("RN View Opened")
        let jsCodeLocation = URL(string: "./bundle.js")
        let rootView = RCTRootView(
            bundleURL: jsCodeLocation,
            moduleName: "App",
            initialProperties: nil,
            launchOptions: nil
        )
        
        let vc = UIViewController()
        vc.view = rootView
        self.present(vc, animated: true, completion: nil)
    }
}
