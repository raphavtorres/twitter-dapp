const unloggedInView = (
	<>
		<div className="login-account">
			<button className="twitter-bg btn" onClick={login}>
				<img src="images/twitter-white.png" alt=""></img>
				Login to your Twitter account
			</button>
		</div>
	</>
);

return (
	<div className="grid">
		{provider ? (
			<Twitter
				logoutButton={logout}
				handleNewTweetDescriptionChange={handleNewTweetDescriptionChange}
				handleNewTweetNameChange={handleNewTweetNameChange}
				addNewTweet={addNewTweet}
				fetchAllTweets={fetchAllTweets}
				tweets={tweets}
				upVote={upVote}
				handleCommentChange={handleCommentChange}
				addComment={addComment}
				refresh={refresh}
			/>
		) : (
			unloggedInView
		)}{" "}
		<ToastContainer />
	</div>

	// <div className="grid">{provider

	//   ? loggedInView

	//   : unloggedInView}</div>

	// {/* <div className="grid">{loggedInView}</div> */}
);
