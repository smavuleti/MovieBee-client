import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import LogoImage from '../../images/AppLogo.svg';


export const NavigationBar = ({ user, onLoggedOut }) => {
  return (
    <Navbar className="bg-body-tertiary"  bg="dark" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
        <img
              src={LogoImage}
              width="35"
              height="35"
              className="d-inline-block align-top"
            />{' '}
          Movie Bee
        </Navbar.Brand>
          <Nav variant="underline" className="me-auto">
            {!user && (
              <>
                <Nav.Link as={Link} to="/login" >
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup" >
                  Signup
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Link as={Link} to="/" >
                  All Movies
                </Nav.Link>
                <Nav.Link as={Link} to="/users" >
                  Profile
                </Nav.Link>
                <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
              </>
            )}
          </Nav>
      </Container>
    </Navbar>
  );
};
