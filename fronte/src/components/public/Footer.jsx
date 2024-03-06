import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from "react-bootstrap/Button";

const Footer = (props) => {
    return (
        
       <>
       <Container  >
        <Col style={{marginTop:"20px",marginBottom:"20px" ,backgroundColor:"black",height:"2px"}}></Col>
      </Container>
       <Container style={{marginBottom:"30px"}}>
        <Row>
        <Col xs={6} md={4}>
        <p><h3>Md-Service</h3></p>
        </Col>
        <Col xs={6} md={2}><h5>Siège Social</h5>
        <p>Abidjan</p> 
        <p>Man</p> 
        <p>Bouake</p> 
        </Col>
        <Col xs={6} md={2}><h5>Reseau Sociaux</h5>
        <p>Wathsapp</p> 
        <p>FaceBook</p> 
        <p>Instagram</p>
        
        </Col>
        <Col xs={6} md={2}><h5>Question</h5>
        <p>Pour vos questionou</p> 
        <p>félicitations, veuillez</p> 
        <p>appeler le : 01 53 53 50 65</p>
        </Col>
        <Col xs={6} md={2}>
        <Button
            className="btn"
              variant="primary"
              href="/Contact"
              style={{
                backgroundColor: "#fd5521",
                border: "none",
                padding: "20px 20px",
                fontSize: "20px",
                marginTop: "30px",
              }}
            >
              Contacter Nous
            </Button>{" "}
        </Col>
        </Row>
       </Container>
       </>
    );
};

export default Footer;