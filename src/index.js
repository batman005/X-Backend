import express from 'express';
import {connect} from './config/database.js';
import Tweet from './models/tweet.js';

//express initialization
const app = express();



app.listen(3000, async() => {
  console.log('Server is running on port 3000');

  connect();
  console.log("Mongo DB Connected");

  Tweet.create({
    content:"This is my second tweet",
    likes:25,
    noofRetweets:5,
    comment:"This is my second comment"
  })
}); 