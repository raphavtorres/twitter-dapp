const loggedInView = (
	<>
		<button className="button" onClick={logout}>
			Logout
		</button>

		<div>
			<h1>New Tweet</h1>

			<Card>
				<Card.Body>
					<Card.Title>What are you thinking? Tweet it out!</Card.Title>

					<Card.Text></Card.Text>

					<Form.Control
						as="input"
						onChange={handleNewTweetNameChange}
						placeholder="Tweet Name"
					/>

					<br></br>

					<br></br>

					<Form.Control
						as="textarea"
						onChange={handleNewTweetDescriptionChange}
						placeholder="Description"
					/>

					<br></br>

					<FaRetweet onClick={addNewTweet} />
				</Card.Body>
			</Card>
		</div>

		<div>
			<h1>
				All Tweets <FaRecycle onClick={fetchAllTweets} />
			</h1>

			{(tweets || []).map((tweet: any, i) => (
				<div key={i}>
					<div>
						<Card>
							<Card.Body>
								<Card.Title>
									<FaThumbsUp onClick={(event) => upVote(i)} /> {tweet.name}
								</Card.Title>

								<p>Total Upvotes: {tweet.upvotes}</p>

								<p>Tweeted by: {tweet.fromAddress}</p>

								<Card.Text>{tweet.description}</Card.Text>

								<div>
									<h3>All Comments</h3>
									{tweet.comments.map((comment: any, j: any) => (
										<div key={j}>
											Comment {j + 1}: {comment}
										</div>
									))}
									<h3>New Comment</h3>
									<span>
										<Form.Control
											as="input"
											onChange={handleCommentChange}
											placeholder="Your comment..."
										/>
									</span>
									&nbsp;
									<span>
										<FaComment onClick={(event) => addComment(event, i)} />
									</span>
								</div>
							</Card.Body>

							<a
								href={
									APP_CONSTANTS.OPENSEA_ASSETS_URL +
									"/" +
									APP_CONSTANTS.CONTRACT_ADDRESS +
									"/" +
									i
								}
								target="_blank"
							>
								Buy Now
							</a>
						</Card>
					</div>
				</div>
			))}
		</div>

		<div></div>

		<div id="console" style={{ whiteSpace: "pre-line" }}>
			<p style={{ whiteSpace: "pre-line" }}></p>
		</div>
	</>
);
