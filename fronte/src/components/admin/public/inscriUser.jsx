import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import React, { useEffect, useState } from "react";
import axios from "../../../services/collerService";
import Hearder from "../../public/Hearder";
import Loader from "../../public/loader";
//import { useNavigate } from "react-router-dom";

const InscriptionUser = (props) => {
  //const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [nom, setNom] = useState("");
  const [statut, setStatut] = useState("true");
  const [email, setEmail] = useState("");
  const [fonction, SetFonction] = useState("admin");
  const [image, setImage] = useState("");
  const envois = (e) => {
    e.preventDefault();
    console.log("Non:", nom);
    console.log("password:", password);
    console.log("email:", email);
    console.log("fonction:", fonction);
    console.log("imae:", image);
    console.log("statut:", statut);

    const formdata = new FormData();
    formdata.append("nom", nom);
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("fonction", fonction);
    formdata.append("image", image);
    formdata.append("statut", statut);

    e.preventDefault();
    // let data = {
    //   nom: nom,
    //   email: email,
    //   password: password,
    // };

    console.log("mon objet", formdata);

    axios
      .post("/admin/inscription", formdata)
      .then((response) => {
        console.log(
          "Réponse de l'API :",
          response,
          "mon message",
          response.data
        );

        setMessage(response.data);

        setTimeout(() => {
          console.log("Fonction exécutée après 3 secondes");
          //navigate("/auth/connexion");
          window.location.reload();
        }, 3000);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête :", error);
      });
  };
  return (
    <div>
      
      <Hearder />
      <Container style={{ marginTop: "40px" }}>
        <Form onSubmit={envois}>
          <Row style={{ padding: "5px 20px", marginBottom: "25px" }}>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="nom">
                {message && <p>{message}</p>}
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
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="fonction">
                <Form.Label>
                  fonction<sup>*</sup>
                </Form.Label>
                <Form.Control
                  className="champ"
                  type="text"
                  value={fonction}
                  onChange={(e) => SetFonction(e.target.value)}
                  name="fonction"
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="imageProjet">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  placeholder="entrer lenon du projet"
                  name="image"
                  onChange={(e) => setImage(e.target.files[0])}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="statut">
              
                <Form.Control
                  className="champ"
                  type="hidden"
                  value={statut}
                  onChange={(e) => setStatut(e.target.value)}
                  name="statut"
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

export default InscriptionUser;
