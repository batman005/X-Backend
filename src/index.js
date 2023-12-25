import express from 'express';
import { connect } from './config/database.js';
import Tweet from './models/tweet.js';
import Hashtag from './models/hastag.js';
import TweetRepository from './repository/tweet-repository.js';

//express initialization
const app = express();



app.listen(3000, async () => {
  console.log('Server is running on port 3000');

  connect();
  console.log("Mongo DB Connected");

  // Tweet.create({
  //   content:"This is my second tweet",
  //   likes:25,
  //   noofRetweets:5,
  //   comment:"This is my second comment"
  // })

  // Hashtag.create({
  //   text: "travel",
  //   tweets: ['656d4ca184c0a4d55294a32d']
  // })

  const tweetRepo = new TweetRepository();
  //get all tweetz
  // let tweets = await tweetRepo.getAllTweets();
  // console.log(tweets);
  //get one tweet
  // let tweet = await tweetRepo.getTweet('651d8bd501d0cefc66f58c85');
  // console.log(tweet);

  let tweet = await tweetRepo.deleteTweet({
    "_id": '656d4ca184c0a4d55294a32d'
  });
  console.log(tweet);

}); 