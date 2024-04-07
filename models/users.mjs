import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true
    },
    lname:{
        type: String,
        required: true
    },
    uname:{
        type: String,
        required: true,
        },
    pword:{
        type: String,
        required: true
    },
    keepSignedIn: Boolean
})

const User = mongoose.model('user', userSchema);

export default User;