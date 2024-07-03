// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	plugins: ["~/plugins/web3auth.client.ts"],
	build: {
		transpile: ["alchemy-sdk"],
	},
});
