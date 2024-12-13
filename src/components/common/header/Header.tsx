import HeaderBasket from '@components/ecommerce/HeaderBasket/HeaderBasket'
import { Badge, Container, Navbar ,Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'

const {headerContainer ,headerLogo} = styles
function Header() {
  return (
   <header>
    <div className={headerContainer}>
    <h1 className={headerLogo}><span>our</span> <Badge bg="info">Ecom</Badge></h1>
    {/* basket */}
    <HeaderBasket/>
    </div>
    <Navbar
    bg="dark"
    data-bs-theme="dark"
     expand="lg"
      className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink}  to="/">Home</Nav.Link>
            <Nav.Link as={NavLink}  to="categories">categories</Nav.Link>
            <Nav.Link as={NavLink}  to="abut-us">Abut Us</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav >
            <Nav.Link as={NavLink}  to="login">login</Nav.Link>
            <Nav.Link as={NavLink}  to="register">Register</Nav.Link>
            
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
   </header>
  )
}

export default Header