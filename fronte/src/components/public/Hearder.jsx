import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./hearder.css";
import { accountService } from "../../services/accountService";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Hearder() {
  const [nom, setNom] = useState("profil");
  const connecter = accountService.local();
  const navigate = useNavigate();
  const deconnexion = () => {
    accountService.deconnexion();
    navigate("/auth/connexion");
  };

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("Mydata"));
    console.log("aslam hooo", local.nom);
    if (local) {
      const name = nom
      setNom(name);
    }
  }, []);
 

  return (
    <Navbar expand="lg" className="success">
      <Container className="m-auto=" id="box">
        <Navbar.Brand href="home" id="titre">
          Md service
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          style={{ width: "auto", minWidth: "fit-content" }}
        />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 "
            id="onglet"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {!connecter ? (
              <>
                <Nav.Link className="lien" href="service">
                  Service
                </Nav.Link>
                <Nav.Link className="lien" href="projet">
                  Projet
                </Nav.Link>
                <Nav.Link className="lien" href="carriere">
                  Carrière{" "}
                </Nav.Link>
                <Nav.Link className="lien" href="contact">
                  Contact{" "}
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link className="lien" href="projet">
                  projet{" "}
                </Nav.Link>
                <Nav.Link className="lien" href="inscriUser">
                  inscritUser{" "}
                </Nav.Link>
                <Nav.Link className="lien" href="user">
                  user{" "}
                </Nav.Link>
                <Nav.Link className="lien" href="modif">
                  editer{" "}
                </Nav.Link>
                <Nav.Link className="lien" href="#">
                  {nom}
                </Nav.Link>
                <Button
                  variant="primary"
                  onClick={deconnexion}
                  style={{
                    width: "120px",
                    backgroundColor: "#fd5521",
                    border: "none",
                    padding: "5px",
                    marginLeft: "25px",
                  }}
                >
                  deconnexion
                </Button>{" "}
              </>
            )}
          </Nav>

          {!connecter && (
            <Navbar.Brand href="#" id="num">
              01 53 53 50 65
            </Navbar.Brand>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Hearder;
