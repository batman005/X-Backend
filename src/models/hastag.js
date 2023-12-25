import mongoose from 'mongoose';
const { Schema} = mongoose;

const hashtagSchema = new Schema({
    text:{
        type:String,
        unique:true,
        required:true,
    },
    tweets:[{
        type: mongoose.Schema.Types.ObjectId
    }]
});

const Hashtag = mongoose.model('Hashtag', hashtagSchema);

export default Hashtag;