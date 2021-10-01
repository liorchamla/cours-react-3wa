import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getDatabase, ref, get } from "firebase/database";
import {
  Navbar as BootstrapNavbar,
  Container,
  Nav,
  NavDropdown,
  Image,
} from "react-bootstrap";
import { getAuth, signOut } from "@firebase/auth";

const Navbar = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const auth = getAuth();
  const history = useHistory();

  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (authState) => {
      if (!authState) {
        setAuthenticated(false);
        setUser(null);
        return;
      }

      setAuthenticated(true);

      const db = getDatabase();
      const uid = authState.uid;

      const userRef = ref(db, "users/" + uid);
      const userData = await get(userRef);

      if (!userData.val()) {
        return;
      }

      setUser(userData.val());
    });
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    history.push("/account/login");
  };

  return (
    <BootstrapNavbar bg="light" expand="lg">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          React CRM
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isAuthenticated && (
              <>
                <Nav.Link as={Link} to="/customers">
                  Clients
                </Nav.Link>
                <Nav.Link as={Link} to="/customers/create">
                  Ajouter un client
                </Nav.Link>
                <Nav.Link as={Link} to="/invoices">
                  Factures
                </Nav.Link>

                {user && (
                  <NavDropdown
                    align="right"
                    title={
                      <>
                        <Image
                          roundedCircle
                          src={user.picture}
                          style={{ width: "25px" }}
                        />{" "}
                        {user.firstName} {user.lastName}
                      </>
                    }
                  >
                    <NavDropdown.Item onClick={handleLogout}>
                      Déconnexion
                    </NavDropdown.Item>
                  </NavDropdown>
                )}
              </>
            )}
            {!isAuthenticated && (
              <>
                <Nav.Link as={Link} to="/account/register">
                  Inscription
                </Nav.Link>
                <Nav.Link as={Link} to="/account/login">
                  Connexion
                </Nav.Link>
              </>
            )}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
