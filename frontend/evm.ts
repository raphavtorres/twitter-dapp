import { Web3 } from "web3";
import type { SafeEventEmitterProvider } from "@web3auth/base";
import { Contract } from "alchemy-sdk";

import { CONTRACT_ADDRESS } from "./constants.js";
import contractABI from "./contract-abi.json";

class EthereumRpc {
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
			console.log("DEU CERTO1");
			const helloWordContract = new Contract(CONTRACT_ADDRESS, contractABI);

			console.log("DEU CERTO2");
			return await helloWordContract.functions.getAllTweets();
			// return await helloWordContract.addComment().call();
		} catch (error) {
			console.log("DEU ERRO", error);
			return [];
		}
	}
}

export default EthereumRpc;
