import express from 'express';
const router = express.Router();
import User from "../models/users.mjs";
import db from "../db/conn.mjs";

// const users = require('../models/users');

// I- INDEX GET route for retrieving users
router.get("/", async (req, res) => {
    try {
        const foundUsers = await User.find({});
        res.status(200).render('users/Index', { users: foundUsers })
        // res.status(200).send(foundUsers);
    } catch (err) {
        res.status(400).send(err);
    }
})


//N- New

router.get('/new', (req, res) => {
    res.render('users/New');
})


//D- Delete route
router.delete("/:id", async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        console.log(deletedUser);
        res.status(200).redirect('/users');
    } catch (err) {
        res.status(400).send(err);
    }

})

//U Update
router.put("/:id", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
        console.log(updatedUser)
        res.redirect(`/users/${req.params.id}`);
    } catch (err) {
        res.status(400).send(err);
    }
})

//starting the post route so that we can see the things in the database

router.post("/", async (req, res) => {

    if (req.body.keepSignedIn === 'on') {//if checked, req.body.readyToEat()is set to 'on', 
        req.body.keepSignedIn = true;
    } else {
        req.body.keepSignedIn = false;
    }
    // //this is useful when we have the user input form
    try {
        // Check if the username is already taken
        const existingUser = await User.findOne({ uname: req.body.uname });
        if (existingUser) {

            return res.send(`
                <script>
                    alert("Username already taken");
                    window.location.href = "users/New"; // Redirect to the create page
                </script>
                `)
        }
        // Create the new user

        const createdUser = await User.create(req.body);
        res.status(201).send(createdUser);
    } catch (err) {
        res.status(400).send(err);
    }
});

// E - Edit     GET         UPDATE 

router.get("/:id/edit", async (req, res) => {
    try {
        const foundUser = await User.findById(req.params.id);
        res.status(200).render('users/Edit', { user: foundUser });
    } catch (err) {
        res.status(400).send(err);
    }
})
// S - Show     GET         READ - display a specific element

router.get('/:id', async (req, res) => {
    try {
        const foundUser = await User.findById(req.params.id);
        res.render('users/Show', { user: foundUser });
    } catch (err) {
        res.status(400).send(err);
    }

})

export default router;
