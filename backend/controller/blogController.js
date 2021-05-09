import asyncHandler from 'express-async-handler'
import Blog from '../models/blogModel.js'

export const getBlogs = asyncHandler( async (req, res) => {
    try {
        const blogs = await Blog.find({})

        res.json(blogs)
    } catch (error) {
        res.status(404)
        throw new Error('Cannot able to get projects')
    }
})

export const getBlogById = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id)

    if(blog) {
        res.json(blog)
    } else {
        res.status(404)
        throw new Error('Sorry can\'t find blog with that id')
     }
});

export const createBlog = asyncHandler(async (req, res) => {
    const createdBlog = await Blog.create(req.body);

    res.status(201).json(createdBlog)
})

export const updateBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id)

    if(blog) {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        res.json(updatedBlog)
    } else {
        res.status(401)
        throw new Error('Sorry something went wrong')
    }
})

export const deleteBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id)

    if(blog) {
        await blog.remove()

        res.json({message: 'Blog removed'})
    } else {
        res.status(401)
        throw new Error('Not able to remove the blog, something went wrong')
    }
})