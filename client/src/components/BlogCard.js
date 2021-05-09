import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'

const BlogCard = ({ blog }) => {
  return (
    <Card className='h-100 py-2 my-2'>
      <Card.Img src={blog.image} className='p-3'></Card.Img>
      <Card.Title className='p-2'>{blog.name}</Card.Title>
      <Card.Text className='px-2'>{blog.description}</Card.Text>
      <Row>
        <Col md={{ offset: 5 }}>
          <Card.Link href={blog.link}>
            <i className='fab fa-lg fa-medium'></i>
          </Card.Link>
        </Col>
      </Row>
    </Card>
  )
}

export default BlogCard
