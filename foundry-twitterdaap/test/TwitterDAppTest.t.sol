// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import {Test, console} from 'forge-std/Test.sol';
import {TwitterDApp} from '../src/TwitterDApp.sol';

contract TwitterDAppTest is Test {
  TwitterDApp public twitterdapp;

  function setUp() external {
    twitterdapp = new TwitterDApp();
  }
}
