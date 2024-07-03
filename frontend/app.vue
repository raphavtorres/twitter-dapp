<template>
	<div>
		<NuxtLayout>
			<div>
				<h1 class="title">Web3 Twitter</h1>
				<p class="title">
					Contract Address: <br />
					{{ CONTRACT_ADDRESS }}
					{{ accounts }}
				</p>
				<component :is="provider ? 'LoggedInView' : 'UnloggedInView'" />
			</div>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import { CONTRACT_ADDRESS } from "./constants";

import type { SafeEventEmitterProvider, IWeb3Auth } from "@web3auth/base";
import EthereumRpc from "~/evm.ts";

console.log("MEU DEIUSSS");

export default {
	setup() {
		const web3auth = ref<IWeb3Auth | null>(null);
		const provider = ref<SafeEventEmitterProvider | null>(null);
		const comment = ref("");
		const newTweetName = ref("");
		const newTweetDescription = ref("");
		const accounts = ref([""]);
		const torusPlugin = ref(null);

		// onMounted(async () => {
		const test = async () => {
			const { $web3auth } = useNuxtApp();
			console.log(web3auth);
			if ($web3auth) {
				web3auth.value = $web3auth as IWeb3Auth;
				provider.value = web3auth.value.provider as SafeEventEmitterProvider;
				// Any other initialization logic with $web3auth
				const rpc = new EthereumRpc(provider.value);
				console.log("INSTANCIOU");
				accounts.value = await rpc.getAllTweets();
			}
		};
		test();
		// });

		return {
			accounts,
			web3auth,
			provider,
			comment,
			newTweetName,
			newTweetDescription,
			torusPlugin,
			CONTRACT_ADDRESS, // Make sure CONTRACT_ADDRESS is available here if used
		};
	},
};
</script>
