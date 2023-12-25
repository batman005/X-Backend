import express from 'express';
import { connect } from './config/database.js';
import router from './routes/index.js';
import TweetRepository from './repository/tweet-repository.js';

//express initialization
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/", router);

app.listen(3000, async () => {
  console.log('Server is running on port 3000');

  connect();
  console.log("Mongo DB Connected");
}); 