import mongoose from "mongoose";

// Define the schema for the Resource Data collection
const resourceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    benefits: {
        type: String,
        required: true
    },
   });

// Create a model for the Resource Data collection using the schema
const Resource = mongoose.model('resource', resourceSchema);

export default Resource;
