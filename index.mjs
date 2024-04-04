import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import db from "./db/conn.mjs";
import userRoutes from "./controllers/user.mjs";
import postRoutes from "./controllers/post.mjs";
import commentRoutes from "./controllers/comment.mjs"
import jsxViewEngine from 'jsx-view-engine';
import methodOverride from 'method-override';
dotenv.config();


// creating express application and other variables
const app = express();
const PORT = process.env.PORT || 8080;

// app.use(express.json());

// ================ Set up view engine ================

app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());

//Midddleware

app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'));

// ================ Routes ================

app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);

app.get("/", (req, res)=>{
    res.send(
        `<div>
        This is my Main Page <br/>
        <a href='/users'>users</a><br/>
        <a href='/posts'>posts</a><br/>
        <a href='/comments'>comments</a>
        </div>`
    );
});



app.listen(PORT,()=>{
    console.log('listening');
});
