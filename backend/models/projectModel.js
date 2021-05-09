import mongoose from 'mongoose'

const projectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    techStack: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
        default: 'no-image.png'
    },
    githubLink: {
        type: String,
        required: true
    },
    demoLink: {
        type: String,
    }
});

const Project = mongoose.model('Project', projectSchema)

export default Project