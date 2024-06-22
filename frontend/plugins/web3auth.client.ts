import { Web3AuthCore } from "@web3auth/core";

import { CHAIN_NAMESPACES } from "@web3auth/base";

import { OpenloginAdapter } from "@web3auth/openlogin-adapter";

const clientId = "client id from the web3auth dashboard plug n play project";

const web3auth = new Web3AuthCore({
	chainConfig: {
		chainNamespace: CHAIN_NAMESPACES.EIP155,

		chainId: "0x13881",

		rpcTarget:
			"https://sleek-rough-uranium.matic-testnet.discover.quiknode.pro/c7c16b97e7b45a469878ee260ad13a130010e26d/",
	},
});

const openloginAdapter = new OpenloginAdapter({
	adapterSettings: {
		clientId,

		network: "testnet",

		uxMode: "popup",

		whiteLabel: {
			name: "Twitter DApp",

			logoLight: "<hosted_logo_image_link>",

			logoDark: "<hosted_logo_image_link>",

			defaultLanguage: "en",

			dark: true, // whether to enable dark mode. defaultValue: false
		},

		loginConfig: {
			// Add login configs corresponding to the providers on modal

			// Twitter login

			jwt: {
				name: "Custom Auth Login",

				Verifier: "<client_verifier_from_Auth0_dashboard>", // Please create a verifier on the developer dashboard and pass the name here

				typeOfLogin: "twitter", // Pass on the login provider of the verifier you've created

				clientId: "<clientId_from_Auth_0_dashboard>", // Pass on the clientId of the login provider here - Please note this differs from the Web3Auth ClientID. This is the JWT Client ID
			},
		},
	},
});

web3auth.configureAdapter(openloginAdapter);

const torusPlugin = new TorusWalletConnectorPlugin({
	torusWalletOpts: {},

	walletInitOptions: {
		whiteLabel: {
			theme: { isDark: true, colors: { primary: "#00a8ff" } },

			logoDark: "https://cryptologos.cc/logos/ethereum-eth-logo.png",

			logoLight: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
		},

		useWalletConnect: true,

		enableLogging: true,
	},
});

await web3auth.addPlugin(torusPlugin);

web3auth.init();
