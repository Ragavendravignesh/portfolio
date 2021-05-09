import express from 'express'
import { createProject, deleteProject, getProjectById, getProjects, updateProject } from '../controller/projectController.js'

const Router = express.Router()

Router.route('/').get(getProjects).post(createProject)
Router.route('/:id').get(getProjectById).put(updateProject).delete(deleteProject)

export default Router
