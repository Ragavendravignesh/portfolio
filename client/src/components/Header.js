import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar variant='dark' bg='dark' expand='lg' collapseOnSelect>
      <Container>
        <Navbar.Brand href='#home'>Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='#projects'>Projects</Nav.Link>
            <Nav.Link href='#Blogs'>Blogs</Nav.Link>
            <Nav.Link href='#getintouch'>Get in touch</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
