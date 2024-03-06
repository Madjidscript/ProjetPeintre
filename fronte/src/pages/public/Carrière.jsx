// import React from 'react';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import Hearder from "../../components/public/Hearder";
import Footer from "../../components/public/Footer";

const Carrière = (props) => {
    return (
        
        <>
        <Hearder/>
        <Container style={{marginTop:"40px"}}>
        <Row>
        <Col md={10}>
        <p style={{fontWeight:"bold"}}>Participez au succès</p>
        <p style={{color:"#fd5521"}}><h1>Nous recrutons pour<br></br> 
        plusieurs postes</h1></p>
        
        </Col>
         
        </Row>
      </Container>

      <Container style={{marginTop:"40px"}}>
        <Row className="dad">
          <Col className="vide" ></Col>
          <Col>
          <div className="carre" style={{height:"auto",paddingBottom:"20px"}}>
          <p className=""><h4>Planificateur·rice de construction</h4></p>
          <p>
          Paragraphe. Cliquez ici pour le modifier et ajouter votre propre texte. 
          C'est l'espace idéal pour raconter une histoire et vous présenter à vos visiteurs.
          </p>
          <div style={{width:"80%",height:"auto",padding:"15px",border:"1px solid #fd5521", margin:"5px auto"}}>
            <a href="/postuler" style={{textDecoration:"none",color:"black"}}>Postuler</a>
          </div>
          </div>
          </Col>
          <Col  >
          <div className="carre" style={{height:"auto",paddingBottom:"20px"}}>
          <p className=""><h4>Planificateur·rice de construction</h4></p>
          <p>
          Paragraphe. Cliquez ici pour le modifier et ajouter votre propre texte. 
          C'est l'espace idéal pour raconter une histoire et vous présenter à vos visiteurs.
          </p>
          <div style={{width:"80%",height:"auto",padding:"15px",border:"1px solid #fd5521", margin:"5px auto"}}>
            <a href="/postuler" style={{textDecoration:"none",color:"black"}}>Postuler</a>
          </div>
          </div>
          </Col>
          <Col  >
          <div className="carre" style={{height:"auto",paddingBottom:"20px"}}>
          <p className=""><h4>Planificateur·rice de construction</h4></p>
          <p>
          Paragraphe. Cliquez ici pour le modifier et ajouter votre propre texte. 
          C'est l'espace idéal pour raconter une histoire et vous présenter à vos visiteurs.
          </p>
          <div style={{width:"80%",height:"auto",padding:"15px",border:"1px solid #fd5521", margin:"5px auto"}}>
            <a href="/postuler" style={{textDecoration:"none",color:"black"}}>Postuler</a>
          </div>
          </div>
          </Col>
          
          
        </Row>
        <Row className="dad">
         
          <Col  >
          <div className="carre" style={{height:"auto",paddingBottom:"20px"}}>
          <p className=""><h4>Planificateur·rice de construction</h4></p>
          <p>
          Paragraphe. Cliquez ici pour le modifier et ajouter votre propre texte. 
          C'est l'espace idéal pour raconter une histoire et vous présenter à vos visiteurs.
          </p>
          <div style={{width:"80%",height:"auto",padding:"15px",border:"1px solid #fd5521", margin:"5px auto"}}>
            <a href="/postuler" style={{textDecoration:"none",color:"black"}}>Postuler</a>
          </div>
          </div>

          </Col>
          <Col  >
          <div className="carre" style={{height:"auto",paddingBottom:"20px"}}>
          <p className=""><h4>Planificateur·rice de construction</h4></p>
          <p>
          Paragraphe. Cliquez ici pour le modifier et ajouter votre propre texte. 
          C'est l'espace idéal pour raconter une histoire et vous présenter à vos visiteurs.
          </p>
          <div style={{width:"80%",height:"auto",padding:"15px",border:"1px solid #fd5521", margin:"5px auto"}}>
            <a href="/postuler" style={{textDecoration:"none",color:"black"}}>Postuler</a>
          </div>
          </div>
          </Col>
          <Col  >
          <div className="carre" style={{height:"auto",paddingBottom:"20px"}}>
          <p className=""><h4>Planificateur·rice de construction</h4></p>
          <p>
          Paragraphe. Cliquez ici pour le modifier et ajouter votre propre texte. 
          C'est l'espace idéal pour raconter une histoire et vous présenter à vos visiteurs.
          </p>
          <div style={{width:"80%",height:"auto",padding:"15px",border:"1px solid #fd5521", margin:"5px auto"}}>
            <a href="/postuler" style={{textDecoration:"none",color:"black"}}>Postuler</a>
          </div>
          </div>
          </Col >
          <Col className="vide"></Col>

        </Row>
        
      </Container>
      <Footer/>
        </>
    );
};

export default Carrière;