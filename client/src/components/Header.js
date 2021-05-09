import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <Navbar variant='dark' bg='dark' expand='lg' collapseOnSelect>
      <Container>
        <Navbar.Brand href='#home'>Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <LinkContainer to='/projects'>
              <Nav.Link>Projects</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/blogs'>
              <Nav.Link>Blogs</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/getintouch'>
              <Nav.Link>Get in touch</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
