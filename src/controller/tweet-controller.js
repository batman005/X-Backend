import TweetService from "../services/tweet-services";

const tweetService = new TweetService();

export const createTweet = async (req, res) => {
    try {
        const data = req.body;
        const response = await tweetService.createTweet(data);

        return res.status(200).json({
            success:true,
            message:"Successfully created tweet",
            data,
            err:{}
        });
    } catch (error) {   
        return res.status(500).json({
            success:false,
            message:"Error while creating tweet",
            data:{},
            err:error
        });
    }
}

export const getTweet = async (req, res) => {
    try {
        const id = req.params.id
        const response = await tweetService.getTweet(id);

        return res.status(200).json({
            success:true,
            message:"Successfully fetched tweet",
            data:response,
            err:{}
        });
    } catch (error) {   
        return res.status(500).json({
            success:false,
            message:"Error while fetching tweet",
            data:{},
            err:error
        });
    }
}