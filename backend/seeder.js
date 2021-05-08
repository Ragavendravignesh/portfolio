import mongoose from 'mongoose'
import dotenv from 'dotenv'

import blogs from './data/blogs.js'
import projects from './data/projects.js'

import Blog from './models/blogModel.js'
import Project from './models/projectModel.js'

import connectDB from './config/db.js'

dotenv.config()
connectDB()

const importData = async () => {
    try {
        await Blog.deleteMany()
        await Project.deleteMany()

        await Blog.insertMany(blogs)
        await Project.insertMany(projects)

        console.log('Data Imported!');
        process.exit()
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

const deleteData = async () => {
    try {
        await Blog.deleteMany()
        await Project.deleteMany()

        console.log('Data destroyed...');
        process.exit()
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}


if(process.argv[2] === '-d') {
    deleteData()
} else if( process.argv[2] === '-i') {
    importData()
}
