import React, { useState, useEffect } from 'react'
import FormContainer from '../components/FormContainer'
import { Form, Button } from 'react-bootstrap'
import { sendEmail } from '../actions/emailActions'
import { SEND_EMAIL_RESET } from '../constants/emailConstants'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'

const GetInTouchScreen = () => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const emailSend = useSelector((state) => state.emailSend)
  const { loading, success, error } = emailSend

  useEffect(() => {
    if (success) {
      setEmail('')
      setMessage('')
      dispatch({ type: SEND_EMAIL_RESET })
    }
  }, [dispatch, success])

  const SubmitHandler = () => {
    dispatch(sendEmail({ email, message }))
  }

  return loading ? (
    <Loader />
  ) : (
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
      {success && <Message variant='success'>Mail sent!</Message>}
      {error && <Message variant='danger'>{error}</Message>}
    </FormContainer>
  )
}

export default GetInTouchScreen
