<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>
<script lang="ts">
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";

const clientId = process.env.WEB3AUTH_CLIENT_ID;

const openloginAdapter = new OpenloginAdapter({
	adapterSettings: {
		clientId,
		network: "testnet",
		uxMode: "popup",
		whiteLabel: {
			name: "Twitter DApp",
			// logoLight: "<hosted-logo-image-link>",
			// logoDark: "<hosted-logo-image-link>",
			defaultLanguage: "en",
			dark: true, // whether to enable dark mode. defaultValue: false
		},
		loginConfig: {
			// Add login configs corresponding to the providers on modal
			// Twitter login
			jwt: {
				name: "Custom Auth Login",
				Verifier: "twitter-dap-verifier",
				typeOfLogin: "twitter",
				clientId: process.env.AUTH0_CLIENT_ID,
			},
		},
	},
});

web3auth.configureAdapter(openloginAdapter);
</script>
