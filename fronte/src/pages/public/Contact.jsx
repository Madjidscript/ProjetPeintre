
import Hearder from '../../components/public/Hearder2';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Footer from '../../components/public/Footer';
import "../public/css/contact.css";
import image2 from "../../assets/image2.jpg";
import { useState } from 'react';
import axios from "../../services/collerService";
import Loader from '../../components/public/loader';

const Contact = (props) => {
    const [prenom,setPrenom]= useState("")
    const [nom,setNom]= useState("")
    const [email,setEmail]= useState("")
    const [objet,setObjet]= useState("")
    const [message,setMessage]= useState("")



    const envoie = (e) => {
        e.preventDefault();
        console.log("Non:", nom);
        console.log("Prenon:", prenom);
        console.log("objet:", objet);
        console.log("email:", email);
        console.log("message:", message);
       
        
    
        e.preventDefault();
        let data = {
          nom: nom,
          prenom: prenom,
          objet: objet,
          email: email,
          message:message
      };
     
      console.log("mon obje",data);
      
    
        axios.post('/contact', data)
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
        <Loader/>
        <Hearder/>
        <Container style={{ marginTop: "40px" }}>
        <Row style={{ padding: "5px 20px" }}>
          <Col md={10}>
           <p  style={{ fontWeight: "bold" }} >
             Nous contacter
            </p>
           
              <h1 style={{ color: "#fd5521" }}>Pour toute préoccupation </h1>
           
            <p>
            Utilisez le formulaire ou appelez au 01 53 53 50 65
            </p>
          </Col>
        </Row>
      </Container>
        <Container>
            <Row>
         <Col >
                <Form method='post' onSubmit={envoie} >
          <Row style={{ padding: "5px 20px", marginBottom: "25px" }}>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="prenom">
                <Form.Label>
                  Prenom
                </Form.Label>
                <Form.Control
                  className="champs"
                  type="text"
                  name="prenom"
                  value={prenom}
                  onChange={(e)=>setPrenom(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="nom">
                <Form.Label>
                  Nom de Famille
                </Form.Label>
                <Form.Control
                  className="champs"
                  type="text"
                  name="nom"
                  value={nom}
                  onChange={(e)=>setNom(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
            
          </Row>
          <Row style={{ padding: "5px 20px", marginBottom: "25px" }}>
          <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>
                  Email<sup>*</sup>
                </Form.Label>
                <Form.Control
                  className="champs"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="adresse">
                <Form.Label>
                  Objet
                </Form.Label>
                <Form.Control
                  className="champs"
                  type="text"
                  name="objet"
                  value={objet}
                  onChange={(e)=>setObjet(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
            
          </Row>
          <Row style={{ padding: "5px 20px", marginBottom: "25px" }}>
            <Col xs={12} md={12}>
              <Form.Group className="mb-3" controlId="motivation">
                <Form.Label>
                Laissez-nous un message...
                </Form.Label>
                <Form.Control
                  className="champ"
                  as="textarea"
                  rows={5}
                  name="message"
                  value={message}
                  onChange={(e)=>setMessage(e.target.value)}
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
    </Col>
                <Col className='pp'>
                <img src={image2} alt="" className='images' />
                </Col>
            </Row>
        </Container>
        <Footer/>
        </>
    );
};

export default Contact;