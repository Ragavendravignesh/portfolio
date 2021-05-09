import express from 'express'
import { getBlogs, getBlogById, createBlog, updateBlog, deleteBlog } from '../controller/blogController.js'

const Router = express.Router()

Router.route('/').get(getBlogs).post(createBlog)
Router.route('/:id').get(getBlogById).put(updateBlog).delete(deleteBlog)

export default Router