import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import db from "./db/conn.mjs";
import userRoutes from "./controllers/user.mjs";
import postRoutes from "./controllers/post.mjs";
import resourceRoutes from "./controllers/resource.mjs"
import jsxViewEngine from 'jsx-view-engine';
import methodOverride from 'method-override';
// import './style/styles.css';
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
app.use(express.static('./style'));

// ================ Routes ================

app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/resources", resourceRoutes);

app.get("/", (req, res)=>{
    res.send(
        `<html>
        <head>
            <style>
                /* CSS styles */
                body {
                    font-family: Arial, sans-serif;
                    background-color: lightblue; /* Change background color to light blue */
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center; /* Center content horizontally */
                    align-items: center; /* Center content vertically */
                    min-height: 100vh; /* Ensure content takes up full viewport height */
                    // background-image: url('images/wellness-logo.jpg'); /* Set background image */
                    // background-size: cover; /* Cover entire page with background image */
                    // background-position: center; /* Center background image */
                }

                .content {
                    text-align: center; /* Center text */
                    padding: 20px; /* Add padding around content */
                    border-radius: 10px; /* Add rounded corners */
                    background-color: rgba(255, 255, 255, 0.8); /* Add semi-transparent white background */
                    max-width: 80%; /* Limit content width */
                    margin: auto; /* Center content horizontally */
                }

                .content a {
                    display: block; /* Make links block-level elements */
                    margin: 10px 0; /* Add spacing between links */
                    font-size: 20px; /* Increase font size */
                }

                /* Add more styles as needed */
            </style>
        </head>
        <body>
            <div class="content">
                <h1>This is my Main Page</h1> <!-- Increase font size for heading -->
                <a href='/users'>Users</a> <!-- Add space between links -->
                <a href='/posts'>Posts</a>
                <a href='/resources'>Resources</a>
            </div>
        </body>
    </html>`
        // `<div>
        // This is my Main Page <br/>
        // <a href='/users'>users</a><br/>
        // <a href='/posts'>posts</a><br/>
        // <a href='/resources'>resources</a>
        // </div>`
    );
});



app.listen(PORT,()=>{
    console.log('listening');
});
