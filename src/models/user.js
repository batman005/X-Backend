import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String
    },
    bio: {
        type: String
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
        }
    ]
})

const User = mongoose.model('User', userSchema);

export default User;