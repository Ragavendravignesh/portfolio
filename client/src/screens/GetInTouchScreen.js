import React, { useState, useEffect } from 'react'
import FormContainer from '../components/FormContainer'
import { Form, Row, Col } from 'react-bootstrap'

const GetInTouchScreen = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  
  return (
    <FormContainer>
      <Form onSubmit={SubmitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='message'>
          <Form.Label>Message</Form.Label>
          <Form.Control
            as='textarea'
            value={message}
            row='3'
            onChange={(e) => setMessage(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Send
        </Button>
      </Form>
    </FormContainer>
  )
}

export default GetInTouchScreen
