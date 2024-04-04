import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    journal:{
        type: String,
        required: true
    },
    mood:{
        type: String,
        required: true
    },
   
})

const Post = mongoose.model('post', postSchema);

export default Post;