import web3, { Web3 } from "web3";
import type { SafeEventEmitterProvider } from "@web3auth/base";
import { Network, Alchemy, Contract } from "alchemy-sdk";

import { ALCHEMY_KEY, CONTRACT_ADDRESS } from "./constants.js";
import contractABI from "./contract-abi.json";

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
		const contractAddress = CONTRACT_ADDRESS;

		try {
			// const alchemyKey = ALCHEMY_KEY;
			const helloWordContract = new Contract(CONTRACT_ADDRESS, contractABI);

			return await helloWordContract.addComment().call();
		} catch (error) {
			return [];
		}
	}
}
