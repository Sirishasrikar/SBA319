import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    overallday:{
        type: String,
        required: true
    },
})

const Comment = mongoose.model('comment', commentSchema);

export default Comment;