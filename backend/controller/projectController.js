import asyncHandler from 'express-async-handler'
import Project from '../models/projectModel.js'

export const getProjects = asyncHandler(async (req, res) => {
  try {
    const projects = await Project.find({})

    res.json(projects)
  } catch (error) {
    res.status(401)
    throw new Error('Sorry not able to get Project details')
  }
})

export const getProjectById = asyncHandler(async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
    if (project) {
      res.json(project)
    } else {
      res.status(404)
      throw new Error('Not able to fetch an product with the given id')
    }
  } catch (error) {
    res.status(401)
    throw new Error('Not able to fetch project details')
  }
})

export const createProject = asyncHandler(async (req, res) => {
  const { image, name, description, techStack, githubLink } = req.body

  const project = new Project({
    name,
    description,
    techStack,
    image,
    githubLink,
  })

  const createProject = await project.save()

  res.status(201).json(createProject)
})

export const updateProject = asyncHandler( async (req, res) => {
    const project = await Project.findById(req.params.id)

    if(project) {
        project.name = req.body.name || project.name
        project.description = req.body.description || project.description
        project.techStack = req.body.techStack || project.techStack
        project.githubLink = req.body.githubLink || project.githubLink
        project.image = req.body.image || project.image

        const updatedProject = await project.save()

        res.json(updatedProject)
    }else {
        res.status(404)
        throw new Error('Not able to find a project with an id.')
    }
})

export const deleteProject = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);

    if(project) {
        await project.remove()

        res.json({message: 'Project removed'})
    }else {
        res.status(404)
        throw new Error('Project not found.')
    }
})
