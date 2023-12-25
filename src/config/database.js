import mongoose from 'mongoose';

export const connect = async () => {
    await   mongoose.connect('mongodb+srv://hrithik:admin123@cluster0.s6x2rfp.mongodb.net/')
}    

