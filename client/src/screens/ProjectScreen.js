import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import ProjectCard from '../components/ProjectCard'
import { getProjects } from '../actions/projectActions'
import { Row, Col } from 'react-bootstrap'

const ProjectScreen = () => {
  const dispatch = useDispatch()

  const projectDetails = useSelector((state) => state.projectDetails)
  const { loading, projects, error } = projectDetails

  useEffect(() => {
    dispatch(getProjects())
  }, [dispatch])

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {projects.map((project) => (
            <Col key={project._id} sm={12} md={6} lg={4} xl={3}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default ProjectScreen
