const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Mongoose/MongoDB: Generates new Schema for Articles
const projectSchema = new Schema({
    projectName: {
        type: String,
    },
    technologies: {
        type: Array,
    },
    about: {
        type: String,
        default: 'No description at this time!'
    },
    image: {
        type: String,
        default: 'No image at this time!'
    },
    liveLink: {
        type: Array,
        default: '#'
    },
    repoLink: {
        type: String,
        default: '#'
    },
});

module.exports = project = mongoose.model('project', projectSchema);