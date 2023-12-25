import { TweetRepository } from '../repository/tweet-repository.js';
import { HashtagRepository } from '../repository/hashtag-repository.js';

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async createTweet(data) {
        const content = data.content;
        //regex to find hashtags in tweet
        const tags = content.match(/#+[a-zA-Z0-9()]+/g).map((tag) => tag.substring(1).toLowerCase());
        //storing the tweet
        const tweet = await this.tweetRepository.createTweet(data);
        // storing the hashtags ---
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        let textOfPresentTags = alreadyPresentTags.map((tags) => tags.text);
        let newTags = tags.filter(tag => !textOfPresentTags.includes(tag));
        newTags = newTags.map(tag => {
            return {
                text: tag,
                tweet: [tweet.id]
            }
        })

        await this.hashtagRepository.bulkCreateHashtag(newTags);
        alreadyPresentTags.forEach((tag) => {
            tag.tweet.push(tweet.id);
            tag.save();
        })
        
    }

    async getTweet(tweetId) {
        const tweet = await this.tweetRepository.getTweet(tweetId);
        return tweet;
    }


}
export default TweetService;