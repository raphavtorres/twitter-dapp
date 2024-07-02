import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, WEB3AUTH_NETWORK } from "@web3auth/base";
import type { CustomChainConfig } from "@web3auth/base/dist/types/chain/IChainInterface";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { OpenloginAdapter, THEME_MODES } from "@web3auth/openlogin-adapter";
import { MetamaskAdapter } from "@web3auth/metamask-adapter";

const SEPOLIA_RPC_TARGET = process.env.SEPOLIA_RPC_TARGET;
const SEPOLIA_CHAIN_ID = process.env.SEPOLIA_CHAIN_ID;
const SEPOLIA_BLOCK_EXPLORER = process.env.SEPOLIA_BLOCK_EXPLORER;
const WEB3AUTH_CLIENT_ID = process.env.WEB3AUTH_CLIENT_ID;
const AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT_ID;

// EXAMPLE Modal: https://web3auth.io/docs/quick-start?product=PNP&sdk=PNP_MODAL&framework=REACT&stepIndex=4
// EXAMPLE AUTH0 NoModal: https://web3auth.io/docs/guides/auth0

const web3auth = async function () {
	// Instantiating the Web3Auth SDK
	const chainConfig: CustomChainConfig = {
		chainNamespace: CHAIN_NAMESPACES.EIP155,
		chainId: SEPOLIA_CHAIN_ID!,
		rpcTarget: SEPOLIA_RPC_TARGET!,
		displayName: "Sepolia Twitter DApp",
		blockExplorerUrl: SEPOLIA_BLOCK_EXPLORER!,
		ticker: "SepoliaETH",
		tickerName: "Ethereum",
		logo: "https://images.toruswallet.io/eth.svg",
	};

	const clientId = WEB3AUTH_CLIENT_ID!;

	const privateKeyProvider = new EthereumPrivateKeyProvider({
		config: { chainConfig },
	});

	const web3auth = new Web3Auth({
		clientId,
		web3AuthNetwork: WEB3AUTH_NETWORK.TESTNET,
		privateKeyProvider,
	});

	// Initializing the Openlogin Adapter
	const openloginAdapter = new OpenloginAdapter({
		adapterSettings: {
			clientId: clientId,
			network: "testnet",
			uxMode: "popup",
			whiteLabel: {
				appName: "Twitter DApp",
				logoLight: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
				logoDark: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
				mode: THEME_MODES.dark,
				defaultLanguage: "en",
			},
			loginConfig: {
				jwt: {
					name: "Custom Auth Login",
					verifier: "twitter-dap-verifier",
					typeOfLogin: "twitter",
					clientId: AUTH0_CLIENT_ID,
				},
			},
		},
	});

	web3auth.configureAdapter(openloginAdapter);

	// Connecting to Metamask
	const metamaskAdapter = new MetamaskAdapter({
		clientId,
		sessionTime: 3600, // 1 hour in seconds
		web3AuthNetwork: WEB3AUTH_NETWORK.TESTNET,
	});

	web3auth.configureAdapter(metamaskAdapter);

	web3auth.init();
};

export default web3auth;
