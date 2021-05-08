import mongoose from 'mongoose'

const blogSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    image: {
        type: String, 
        default:'no-image.jpg'
    }
})

const Blog = mongoose.model('Blog', blogSchema)

export default Blog