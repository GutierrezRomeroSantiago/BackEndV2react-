
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import Cookies from 'universal-cookie' 

export function Toolbar () {
  const cookies = new Cookies();
    return (
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="/">Movie Media</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="amigos">Amigos</Nav.Link>
        <Nav.Link href="top">Top</Nav.Link>
        <Nav.Link href="estrenos">Estrenos</Nav.Link>
        <NavDropdown title="Tendencias" id="navbarScrollingDropdown">
          <NavDropdown.Item href="diario">Diarias</NavDropdown.Item>
          <NavDropdown.Item href="semanal">Semanales</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Ajustes" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Mi cuenta</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Terms</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Log Out
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link>{cookies.get('usuario')}</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Añadir Amigos"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}


