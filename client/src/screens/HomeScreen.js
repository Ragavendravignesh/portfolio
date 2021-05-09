import React from 'react'
import { Card, Row, Col, ResponsiveEmbed } from 'react-bootstrap'

const HomeScreen = () => {
  return (
    <Row className='justify-content-md-center'>
      <Col xs={12} md={10}>
        <Card className='m-5 p-3 rounded'>
          <Row>
            <Col>
              <Card.Title as='h3'>About me</Card.Title>
              <Card.Text className='cardtext'>
                I'm a full stack developer. I have experience of developing Web
                apps using MERN and Java stack. I'm currently working as front
                end react developer with two years of experience. I always like
                to learn and do new things.
              </Card.Text>
              <Card.Text className='cardtext'>
                Some of other things I'm interested in doing are Writing,
                Reading, Drawing and Teaching. To know more aboute me, get in
                touch with me.
              </Card.Text>
              <Row className='my-4'>
                <Col>
                  <Card.Link href='https://github.com/Ragavendravignesh'><i class="fab fa-lg fa-github"></i></Card.Link>
                  <Card.Link href='https://ragavendravignesh.medium.com/'><i class="fab fa-lg fa-medium"></i></Card.Link>
                  <Card.Link href='https://www.linkedin.com/in/ragavendra-vignesh-259870133/'>
                    <i class='fab fa-lg fa-linkedin'></i>
                  </Card.Link>
                  <Card.Link
                    href='https://drive.google.com/file/d/1wgQliuG8haVjjhGBoUaGJxfscVR09VFT/view?usp=sharing'
                    target='_blank'
                  >
                    <i class='fa fa-lg fa-file'></i>
                  </Card.Link>
                </Col>
              </Row>
            </Col>
            <Col>
              <ResponsiveEmbed aspectRatio='1by1'>
                <Card.Img
                  src='./images/mypic.jpg'
                  className='borders'
                ></Card.Img>
              </ResponsiveEmbed>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}

export default HomeScreen
