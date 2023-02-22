//Importing from react
import React from 'react'
//Importing from react-router-dom
import { Link } from 'react-router-dom';
//Importing from React-bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//Importing pages for NavBar
import About from '../pages/About';
import Favorite from '../pages/Favorite';
import Resource from '../pages/Resource';
import RecipeCreate from '../RecipeCreate';
import Tips from '../pages/Tips';

const NavBar = () => {
  return (
    <Navbar expand="lg" bg='secondary' variant="light">
           
        <Container>
          <Navbar.Brand as={Link} to={'/'}>Espo's</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/About'}>About</Nav.Link>
            <Nav.Link as={Link} to={'/Favorite'}>Favorite Recipes</Nav.Link>
            <Nav.Link as={Link} to={'/Resource'}>Resource</Nav.Link>
            <Nav.Link as={Link} to={'/Tips'}>Tips</Nav.Link>
            <Nav.Link as={Link} to={'RecipeCreate'}>Add</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
  )
}

export default NavBar