<template>
	<div>
		<NuxtLayout>
			<div>
				<h1 className="title">Web3 Twitter</h1>
				<p className="title">
					Contract Address: <br />
					{{ CONTRACT_ADDRESS }}
				</p>
				<!-- <div className="grid">{provider ? loggedInView : unloggedInView}</div> -->
				<component :is="provider ? 'LoggedInView' : 'UnloggedInView'" />
			</div>
			<!-- LOGGED VIEW -->
			<!-- UNLOGGED VIEW -->
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>
<script lang="ts">
import { ref, onMounted } from "vue";
import { CONTRACT_ADDRESS } from "./constants";

// import LoggedInView from '@/components/LoggedInView.vue';
// import UnloggedInView from '@/components/UnloggedInView.vue';

const web3auth = ref(null);
const provider = ref(true);
const tweets = ref(null);
const comment = ref("");
const newTweetName = ref("");
const newTweetDescription = ref("");
const torusPlugin = ref(null);

provider.value = false; // testing provider

onMounted(() => {
	// Lógica de inicialização do Web3Auth e outras funcionalidades
});
</script>
