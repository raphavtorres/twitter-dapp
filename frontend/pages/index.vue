<template>Hello from pages!</template>
<script lang="ts">
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, IProvider, WEB3AUTH_NETWORK } from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";

const chainConfig = {
	// chain identifier for sepolia testnet
	chainId: process.env.SEPOLIA_CHAIN_ID,
	// enables comunication with contract deployed on chain hosted on alchemy
	rpcTarget: process.env.SEPOLIA_RPC_TARGET,
	// specifies that the chain is EVM compatible
	chainNamespace: CHAIN_NAMESPACES.EIP155,
};

const web3auth = new Web3AuthCore({
	chainConfig: chainConfig,
});

web3auth.init();
</script>
