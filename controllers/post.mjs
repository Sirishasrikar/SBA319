import express from 'express';
const router = express.Router();
import Post from "../models/posts.mjs";
import db from "../db/conn.mjs";



// I - INDEX   GET route for retrieving users
router.get("/", async (req, res) => {
    try {
        const foundPosts = await Post.find({});
        res.status(200).render('posts/Index', { posts: foundPosts })
    } catch (err) {
        res.status(400).send(err);
    }
})


//New

router.get('/new', (req, res) => {
    res.render('posts/New');
})

// D - Delete   DELETE    This permanently removes from the database

router.delete("/:id", async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        console.log(deletedPost);
        res.status(200).redirect('/posts');
    } catch (err) {
        res.status(400).send(err);
    }

})
//U Update
router.put("/:id", async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
        
        res.redirect(`/posts/${req.params.id}`);
    } catch (err) {
        res.status(400).send(err);
    }
})
//starting the post route so that we can see the things in the database

router.post("/", async (req, res) => {
   
    try {
        const createdPost = await Post.create(req.body);
        res.status(200).send(createdPost);
    } catch (err) {
        res.status(400).send(err);
    }
})
// E - Edit     GET         UPDATE 

router.get("/:id/edit", async (req, res) => {
    try {
        const foundPost = await Post.findById(req.params.id);
        res.status(200).render('posts/Edit', { post: foundPost });
    } catch (err) {
        res.status(400).send(err);
    }
})
// S - Show     GET         READ - display a specific element

router.get('/:id', async (req, res) => {
    try {
        const foundPost = await Post.findById(req.params.id);
        res.render('posts/Show', { post: foundPost });
    } catch (err) {
        res.status(400).send(err);
    }

})
export default router;