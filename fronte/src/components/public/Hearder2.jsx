import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./hearder.css";
import { accountService } from "../../services/accountService";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Hearder() {
  const [nom, setNom] = useState("");
  const [id, setid] = useState("");
  const connecter = accountService.local();
  const navigate = useNavigate();
  const deconnexion = () => {
    accountService.deconnexion();
    navigate("/auth/connexion");
  };

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("Mydata"));
    
    if (local) {
      console.log("aslam hooo", local.nom,"mon id hoo",local._id);
      setNom(local.nom);
      setid(local._id)
    }
  }, []);
 

  return (
    <>
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
              
          
              </Nav>
         
            <Navbar.Brand href="#" id="num">
              01 53 53 50 65
            </Navbar.Brand>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Hearder;
