import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'

const ProjectCard = ({ project }) => {
  return (
    <Card className='h-100 p-3 my-4 rounded'>
      <Card.Img src={`${project.image}`} variant='top'></Card.Img>
      <Card.Title>{project.name}</Card.Title>
      <Card.Text>
        <strong>Description:</strong> {project.description}
      </Card.Text>
      <Card.Text>
        <strong>Tech Stack:</strong> {project.techStack}
      </Card.Text>
      <Row>
        <Col>
          <Card.Link href={`${project.githubLink}`}>
            <i className='fab fa-lg fa-github'></i>
          </Card.Link>
          {project.demoLink && (
            <>
              <Card.Link href={`${project.demoLink}`}>Demo</Card.Link>
            </>
          )}
        </Col>
      </Row>
    </Card>
  )
}

export default ProjectCard
