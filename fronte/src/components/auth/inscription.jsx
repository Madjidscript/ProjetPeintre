import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import React, { useState } from "react";
import axios from "../../services/collerService";
import { useNavigate } from "react-router-dom";

const Inscription = (props) => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const envois = (e) => {
    e.preventDefault();
    console.log("Non:", nom);
    console.log("password:", password);
    console.log("email:", email);

    e.preventDefault();
    let data = {
      nom: nom,
      email: email,
      password: password,
    };

    console.log("mon objet", data);

    axios
      .post("/admin/inscription", data)
      .then((response) => {
        console.log("Réponse de l'API :", response);

        setTimeout(() => {
          console.log("Fonction exécutée après 3 secondes");
          navigate("/admin/connexion");
        }, 3000);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête :", error);
      });
  };
  return (
    <div>
      <Container style={{ marginTop: "40px" }}>
        <Form onSubmit={envois}>
          <Row style={{ padding: "5px 20px", marginBottom: "25px" }}>
            <Col xs={12}>
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
            <Col xs={12}>
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

            <Col xs={12}>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>
                  Password<sup>*</sup>
                </Form.Label>
                <Form.Control
                  className="champ"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
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
    </div>
  );
};

export default Inscription;
