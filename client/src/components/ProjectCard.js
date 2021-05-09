import React from 'react'
import { Card } from 'react-bootstrap'

const ProjectCard = ({ project }) => {
  return (
    <Card className='p-3 my-3 rounded'>
      <Card.Img src={project.image} variant='top'></Card.Img>
      <Card.Title>{project.name}</Card.Title>
      <Card.Text>Destination: {project.description}</Card.Text>
      <Card.Text>Tech Stack: {project.techStack}</Card.Text>
      <Row>
        <Col>
          <Card.Link href={`${project.githubLink}`}>
            <i class='fab fa-lg fa-github'></i>
          </Card.Link>
          {project.demoLink && (
            <Card.Link href={`${project.demoLink}`}>Demo</Card.Link>
          )}
        </Col>
      </Row>
    </Card>
  )
}

export default ProjectCard
