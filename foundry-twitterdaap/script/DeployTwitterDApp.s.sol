// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import {Script, console} from 'forge-std/Script.sol';
import {TwitterDApp} from '../src/TwitterDApp.sol';

contract DeployTwitterDApp is Script {
  function run() external returns (TwitterDApp) {
    vm.startBroadcast();
    TwitterDApp twitterDApp = new TwitterDApp();
    vm.stopBroadcast();
    return twitterDApp;
  }
}
