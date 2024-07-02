import web3auth from "~/plugins/web3auth.client";

const fetchAllTweets = async () => {
	if (!provider) {
		console.log("Provider not initialized yet");

		return;
	}

	const rpc = new RPC(provider);

	try {
		let fetchedTweets = await rpc.getAllTweets();

		setTweets(fetchedTweets);
	} catch (error) {
		console.log("error in fetching tweets", error);
	}
};

const upVote = async (tweetIndex: any) => {
	if (!provider) {
		console.log("Provider not initialized yet");

		return;
	}

	try {
		const rpc = new RPC(provider);

		await rpc.sendUpVoteTransaction(tweetIndex);

		fetchAllTweets();
	} catch (error) {
		console.log("failed to execute upvote transaction", error);
	}
};

const addNewTweet = async () => {
	if (!provider) {
		console.log("Provider not initialized yet");

		return;
	}

	try {
		const rpc = new RPC(provider);

		await rpc.sendWriteTweetTransaction(newTweetName, newTweetDescription);

		fetchAllTweets();
	} catch (error) {
		console.log("failed to execute new tweet transaction", error);
	}
};

const addComment = async (event: any, tweetIndex: any) => {
	if (!provider) {
		console.log("provider not initialized yet");

		return;
	}

	try {
		const rpc = new RPC(provider);

		await rpc.sendAddCommentTransaction(tweetIndex, comment);

		fetchAllTweets();
	} catch (error) {
		console.log("failed to execute add comment transaction", error);
	}
};

const logout = async () => {
	if (!web3auth) {
		console.log("web3auth not initialized yet");

		return;
	}

	await web3auth.logout();

	setProvider(null);
};

// Event handlers

const handleCommentChange = async (event: any) => {
	setComment(event.target.value);
};

const handleNewTweetNameChange = async (event: any) => {
	setNewTweetName(event.target.value);
};

const handleNewTweetDescriptionChange = async (event: any) => {
	setNewTweetDescription(event.target.value);
};
