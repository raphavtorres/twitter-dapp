import type { SafeEventEmitterProvider } from "@web3auth/base";

// import { Web3 } from "web3";
const { Web3 } = require("web3");

import { ALCHEMY_KEY, CONTRACT_ADDRESS } from "./constants.js";

export default class EthereumRpc {
	private provider: SafeEventEmitterProvider;

	constructor(provider: SafeEventEmitterProvider) {
		this.provider = provider;
	}

	async getAccounts(): Promise<string[]> {
		try {
			const web3 = new Web3(this.provider as any);
			const accounts = await web3.eth.getAccounts();
			return accounts;
		} catch (error: unknown) {
			return error as string[];
		}
	}

  async getAllTweets(): Promise<any[]> {
    try {
      const alchemyKey = ALCHEMY_KEY;
      // const web3 = create
      const contractABI = require('./contract-abi.json');
      const contractAddress = CONTRACT_ADDRESS;
      const contract = new web3.eth.contract()

      return await contract.methods.getAllTweets().call()
    }
  }
}
