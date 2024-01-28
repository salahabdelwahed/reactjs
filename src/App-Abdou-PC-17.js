import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import "./App.css";

function App() {
  return (
    <div> 
      {/* Navbar  */}
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Brand href="#">Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" disabled>
            Link
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar> 
  {/* Title  */}
  <h1>My First Projrct React</h1>
  {/* Cards  */}
  <div className="cards">
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://docplanner-gomycode.onrender.com/country%20img/barcelona.png" />
      <Card.Body>
        <Card.Title>BARCELONA</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://docplanner-gomycode.onrender.com/country%20img/rome.png" />
      <Card.Body>
        <Card.Title>ROMA</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://docplanner-gomycode.onrender.com/country%20img/rio-janeiro.png" />
      <Card.Body>
        <Card.Title>RIO DE JENER</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </div>
  </div>
  )
}

export default App

