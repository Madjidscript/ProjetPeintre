import "../public/css/postuler.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import React, { useState } from "react";
import axios from "../../services/collerService";
const Postuler = (props) => {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [adresse, setAdresse] = useState("");
  const [numero, setNumero] = useState("");
  const [email, setEmail] = useState("");
  const [poste, setPoste] = useState("");
  const [motiv, setMotivation] = useState("");
  
 


  const envois = (e) => {
    e.preventDefault();
    console.log("Non:", nom);
    console.log("Prenon:", prenom);
    console.log("Adresse:", adresse);
    console.log("email:", email);
    console.log("poste:", poste);
    console.log("motiv:", motiv);
    let selectElement = document.getElementById("pp");
    let selectedIndex = selectElement.selectedIndex
    let selectedText = selectElement.options[selectedIndex].textContent;
    console.log("ma valeur choisis",selectedText);

    e.preventDefault();
    let data = {
      nom: nom,
      prenom: prenom,
      adresse: adresse,
      numero: numero,
      email: email,
      poste: selectedText,
      motiv: motiv
  };
 
  console.log("mon objet",data);
  

    axios.post('/postuler', data)
      .then((response) => {
        console.log("Réponse de l'API :", response);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête :", error);
      });

      setTimeout(() => {
        console.log("Fonction exécutée après 3 secondes");
        window.location.reload()
    }, 3000);
  };
  return (
    <>
      <Container>
        <Row
          className="justify-content-between"
          style={{ padding: "5px 20px" }}
        >
          <Col xs={10}>
            <div
              style={{
                width: "250px",
                height: "auto",
                border: "1px solid #fd5521",
                padding: "10px",
              }}
            >
              <h1>Md-Service</h1>
            </div>
          </Col>
          <Col xs={2}>
            <p>
              {" "}
              <a className="ms-auto" href="/carriere">
                <FontAwesomeIcon
                  className="ms-auto"
                  icon={faTimes}
                  size="2x"
                  color="red"
                />
              </a>
            </p>
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: "40px" }}>
        <Row style={{ padding: "5px 20px" }}>
          <Col md={10}>
           
              <h1 style={{ color: "#fd5521" }}>Participez au succès </h1>
           
            <p style={{ fontWeight: "bold" }}>
              Veuillez remplir le formulaire ci-dessous
            </p>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: "40px" }}>
        <Form onSubmit={envois}   >
          <Row style={{ padding: "5px 20px", marginBottom: "25px" }}>
            <Col xs={12} md={4}>
              <Form.Group className="mb-3" controlId="prenom">
                <Form.Label>
                  Prenom<sup>*</sup>
                </Form.Label>
                <Form.Control
                  className="champ"
                  type="text"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  name="prenom"
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <Form.Group className="mb-3" controlId="nom">
                <Form.Label>
                  Nom<sup>*</sup>
                </Form.Label>
                <Form.Control
                  className="champ"
                  type="text"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  name="nom"
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>
                  Email<sup>*</sup>
                </Form.Label>
                <Form.Control
                  className="champ"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row style={{ padding: "5px 20px", marginBottom: "25px" }}>
            <Col xs={12} md={4}>
              <Form.Group className="mb-3" controlId="numero">
                <Form.Label>
                  Numero<sup>*</sup>
                </Form.Label>
                <Form.Control
                  className="champ"
                  type="number"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                  name="numero"
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <Form.Group className="mb-3" controlId="adresse">
                <Form.Label>
                  Adresse<sup>*</sup>
                </Form.Label>
                <Form.Control
                  className="champ"
                  type="text"
                  value={adresse}
                  onChange={(e) => setAdresse(e.target.value)}
                  name="adresse"
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <Form.Group className="mb-3" controlId="poste">
                <Form.Label>
                  Post<sup>*</sup>
                </Form.Label>
                <Form.Select
                  className="champ"
                  name="poste"
                  id="pp"
                  value={poste}
                  onChange={(e) => setPoste(e.target.value)}
                  aria-label="Default select example"
                >
                  <option></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="31">Three</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row style={{ padding: "5px 20px", marginBottom: "25px" }}>
            <Col xs={12} md={12}>
              <Form.Group className="mb-3" controlId="motivation">
                <Form.Label>
                  Lettre de motivation<sup>*</sup>
                </Form.Label>
                <Form.Control
                  className="champ"
                  as="textarea"
                  rows={5}
                  value={motiv}
                  onChange={(e) => setMotivation(e.target.value)}
                  name="motiv"
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row style={{ padding: "5px 25px" }}>
            <Col xs={4}>
              <Button className="bouton" type="submit">
                valider
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
      
    </>
  );
};

export default Postuler;
