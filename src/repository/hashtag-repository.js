import Hashtag from "../models/hastag";
import CrudRepository from "./crud-repositoy";

class HashtagRepository extends CrudRepository {
    constructor() {
        super(Hashtag);
    }
  
    
    async bulkCreateHashtag(data) {
        try {
            let hashtags = await Hashtag.insertMany(data);
            return hashtags;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    //get hashtag by name
    async getHashtagByName(text) {
        try {
            let hashtag = await Hashtag.find({ text: text });
            return hashtag;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getHastag(id) {
        try {
            let hashtag = await Hashtag.findById(id);
            return hashtag;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteHashtag(data) {
        try {
            let hashtag = await Hashtag.deleteOne(data);
            return hashtag;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default HashtagRepository;