import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProjectScreen from './screens/ProjectScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route exact path='/' component={HomeScreen} /> 
          <Route path='/projects' component={ProjectScreen} />         
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
