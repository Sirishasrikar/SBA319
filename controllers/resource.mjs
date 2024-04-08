import express from 'express';
const router = express.Router();
import Resource from "../models/resources.mjs";
import db from "../db/conn.mjs";

//seed route

router.get("/seed", async (req, res) => {
    console.log('Seeding resources...');
    try {
        await Resource.create([
            {
                title: "Meditation",
                description: "Practice mindfulness and relaxation techniques.",
                category: "Wellness",
                instructions: "Find a quiet space, sit comfortably, and focus on your breath.",
                benefits: "Reduces stress, improves focus, and enhances emotional well-being.",
            },
            {
                title: "Exercise",
                description: "Engage in physical activity to stay healthy and fit.",
                category: "Fitness",
                instructions: "Choose activities you enjoy, such as running, yoga, or weightlifting.",
                benefits: "Boosts mood, increases energy levels, and promotes overall health.",
            },
            {
                title: "Healthy Eating",
                description: "Consume a balanced diet with plenty of fruits, vegetables, and whole grains.",
                category: "Nutrition",
                instructions: "Plan meals ahead, focus on whole foods, and avoid processed foods.",
                benefits: "Provides essential nutrients, supports weight management, and reduces risk of chronic diseases.",
            },
            {
                title: "Mindful Breathing",
                description: "Practice deep breathing exercises to calm the mind and reduce stress. Focus on inhaling and exhaling slowly and deeply, paying attention to the sensations of your breath.",
                category: "Relaxation Techniques",
                instructions: "Sit or lie down in a comfortable position. Close your eyes and take a deep breath in through your nose, filling your lungs with air. Hold for a few seconds, then slowly exhale through your mouth. Repeat for several minutes.",
                benefits: "Reduces anxiety, lowers blood pressure, promotes relaxation.",
            }


        ])
        res.status(200).redirect('/resources');
    } catch (err) {
        res.status(400).send(err);
    }
});

//GET route for retrieving users
router.get("/", async (req, res) => {
    try {
        const foundResources = await Resource.find({});
        res.status(200).render('resources/Index', { resources: foundResources })
        // res.status(200).send(foundResources);
    } catch (err) {
        res.status(400).send(err);
    }
})

//New

router.get('/new', (req, res) => {
    res.render('resources/New');
})

// D - Delete   DELETE    This permanently removes from the database

router.delete("/:id", async (req, res) => {
    try {
        const deletedResource = await Resource.findByIdAndDelete(req.params.id);
        console.log(deletedResource);
        res.status(200).redirect('/resources');
    } catch (err) {
        res.status(400).send(err);
    }
})

//U Update
router.put("/:id", async (req, res) => {
    try {
        const updatedResource = await Resource.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
        
        res.redirect(`/resources/${req.params.id}`);
    } catch (err) {
        res.status(400).send(err);
    }
})
//starting the post route so that we can see the things in the database

router.post("/", async (req, res) => {
   
    try {
        const createdResource = await Resource.create(req.body);
        res.status(200).send(createdResource);
    } catch (err) {
        res.status(400).send(err);
    }
})

// E - Edit     GET         UPDATE 

router.get("/:id/edit", async (req, res) => {
    try {
        const foundResource = await Resource.findById(req.params.id);
        res.status(200).render('resources/Edit', { resource: foundResource });
    } catch (err) {
        res.status(400).send(err);
    }
})
// S - Show     GET         READ - display a specific element

router.get('/:id', async (req, res) => {
    try {
        const foundResource = await Resource.findById(req.params.id);
        res.render('resources/Show', { resource: foundResource });
    } catch (err) {
        res.status(400).send(err);
    }

})


export default router;