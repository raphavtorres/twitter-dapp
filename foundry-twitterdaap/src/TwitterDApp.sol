// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/utils/Strings.sol';
import '@openzeppelin/contracts/utils/Base64.sol';

contract TwitterDApp is ERC721('TwitterDApp', 'TDAPP') {
  uint256 tokenId;
  Tweet[] public tweets;

  struct Tweet {
    string name;
    string description;
    uint256 upvotes;
    string[] comments;
    address fromAddress;
  }

  function tokenURI(
    uint256 _tokenId
  ) public view override returns (string memory) {
    Tweet memory tweet = tweets[_tokenId];

    bytes memory dataURI = abi.encodePacked(
      '{',
      '"name":',
      '"',
      tweet.name,
      '",'
      '"description":',
      '"',
      tweet.description,
      '"',
      ',',
      '"attributes":',
      '[',
      '{',
      '"trait_type":',
      '"Upvotes",',
      '"value":',
      Strings.toString(tweet.upvotes),
      '}',
      ']',
      '}'
    );

    return
      string(
        abi.encodePacked(
          'data:application/json;base64,',
          Base64.encode(dataURI)
        )
      );
  }

  function writeTweet(string memory prefName, string memory prefDesc) public {
    _safeMint(msg.sender, tokenId);
    tweets.push(
      Tweet({
        name: prefName,
        description: prefDesc,
        upvotes: 0,
        comments: new string[](0),
        fromAddress: msg.sender
      })
    );
    tokenId++;
  }

  function upvote(uint tweetIndex) public {
    tweets[tweetIndex].upvotes++;
  }

  function addComment(uint256 tweetIndex, string memory prefComments) public {
    tweets[tweetIndex].comments.push(prefComments);
  }

  function getAllTweets() public view returns (Tweet[] memory) {
    return tweets;
  }
}
