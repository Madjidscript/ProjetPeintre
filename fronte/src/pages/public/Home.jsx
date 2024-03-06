import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "./css/home.css";
import Hearder from "../../components/public/Hearder";
import video1 from "../../assets/peintre1.mp4";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";

import { useNavigate } from "react-router-dom";
import Footer from "../../components/public/Footer";

const Home = (props) => {
  let navigate = useNavigate();

  return (
    <>
      <Container fluid className="hearder">
        <video autoPlay muted loop className="fill-width">
          <source src={video1} type="video/mp4" />
        </video>
        <Hearder></Hearder>
        <Row className="box">
          <Col
            style={{ background: "none", border: "none" }}
            xs={12}
            md={6}
            className="me-auto"
            id="card"
          >
            <h3 style={{ marginTop: "20px" }}>
              Donnez une nouvelle dimension à votre intérieur.
            </h3>
            <h3 style={{ marginBottom: "25px" }}>
              Transformons vos murs en toiles d'art, une couleur à la fois.
              Votre espace, notre passion.
            </h3>

            <p style={{ marginBottom: "25px" }}>
              Des peintres dévoués pour des résultats impeccables.
            </p>
          </Col>
        </Row>
        <Row className="" xs={12} md={2}>
          <Col  style={{ margin: "0px auto" }} className="pbouton">
            <Button
              variant="primary"
              href="/projet"
              style={{
                backgroundColor: "#fd5521",
                border: "none",
                padding: "20px",
                marginRight: "15px",
              }}
            >
              Voir les Projet
            </Button>{" "}
         
            <Button
              variant="outline-primary"
              id="bouton2"
              href="/contact"
              style={{
               border:"1px solid #fd5521",
               color:"white",
                padding: "20px",
                marginRight: "15px",
              }}
            >
              contacter nous
            </Button>{" "}
          </Col>
          
            
          
        </Row>
      </Container>
      <Container style={{ marginTop: "30px" }}>
        <Row className="" style={{ padding: "30px", margin: "0px auto" }}>
          <Col md={10}>
            <p style={{ marginBottom: "25px" }}>
              Votre partenaire de confiance pour des murs éclatant
            </p>
            <h1 style={{ color: "#fd5521" }}>
              MD Service Des pinceaux experts pour une <br></br>finition
              impeccable.
            </h1>
          </Col>
          <Col xs={4} md={2}>
            <Button
            className="btn"
              variant="primary"
              href="/projet"
              style={{
                backgroundColor: "#fd5521",
                border: "none",
                padding: "20px 20px",
                fontSize: "20px",
                marginTop: "20px",
              }}
            >
              Lire plus
            </Button>{" "}
          </Col>
        </Row>
      </Container>
      <Container>
        <Row
          style={{
            padding: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Col
            style={{
              backgroundColor: "#fd5521",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "60vh",
            }}
            xs={12}
            md={5}
          >
            <Image
              src={image1}
              rounded
              style={{ width: "300px", height: "300px" }}
            ></Image>
          </Col>
          <Col
            style={{
              height: "90vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            xs={12}
            md={7}
          >
            <Image
              src={image2}
              rounded
              style={{ width: "80%", height: "80vh" }}
            ></Image>
          </Col>
        </Row>
        <Row
          style={{
            padding: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Col
            style={{
              height: "90vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            xs={12}
            md={7}
          >
            <Image
              src={image4}
              rounded
              style={{ width: "80%", height: "80vh" }}
            ></Image>
          </Col>
          <Col
            style={{
              backgroundColor: "#fd5521",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "60vh",
            }}
            xs={12}
            md={5}
          >
            <Image
              src={image3}
              rounded
              style={{ width: "300px", height: "300px" }}
            ></Image>
          </Col>
        </Row>
      </Container>
      <Container fluid id="propos">
        <Image src={image1} className="img"></Image>
        <Row>
          <Col xs={12}>
            <h4 style={{ color: "white" }}>Notre identite</h4>
          </Col>
          <Col>
            <h1 xs={12} style={{ color: "#fd5521" }}>
              À propos de notre entreprise
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <p style={{ color: "white" }}>
              {" "}
              Chez{" "}
              <strong style={{ color: "#fd5521", fontSize: "25px" }}>
                Md Service
              </strong>{" "}
              , nous comprenons l'importance de créer des intérieurs et des
              extérieurs qui reflètent votre style et votre personnalité. C'est
              pourquoi nous travaillons en étroite collaboration avec chaque
              client pour comprendre leurs besoins et leurs préférences, afin de
              livrer des résultats qui dépassent les attentes.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={2}>
            <p style={{ color: "white", fontSize: "35px", fontWeight: "bold" }}>
              2018
            </p>
            <p style={{ color: "white", fontSize: "15px", marginTop: "-15px" }}>
              Année de creation
            </p>
            <p>
              <div
                style={{
                  width: "50px",
                  height: "2px",
                  backgroundColor: "white",
                }}
              ></div>
            </p>
          </Col>
          <Col xs={6} md={2}>
            <p style={{ color: "white", fontSize: "35px", fontWeight: "bold" }}>
              2018
            </p>
            <p style={{ color: "white", fontSize: "15px", marginTop: "-15px" }}>
              Année de creation
            </p>
            <p>
              <div
                style={{
                  width: "50px",
                  height: "2px",
                  backgroundColor: "white",
                }}
              ></div>
            </p>
          </Col>
          <Col xs={6} md={2}>
            <p style={{ color: "white", fontSize: "35px", fontWeight: "bold" }}>
              2018
            </p>
            <p style={{ color: "white", fontSize: "15px", marginTop: "-15px" }}>
              Année de creation
            </p>
            <p>
              <div
                style={{
                  width: "50px",
                  height: "2px",
                  backgroundColor: "white",
                }}
              ></div>
            </p>
          </Col>
          <Col xs={6} md={2}>
            <p style={{ color: "white", fontSize: "35px", fontWeight: "bold" }}>
              2018
            </p>
            <p style={{ color: "white", fontSize: "15px", marginTop: "-15px" }}>
              Année de creation
            </p>
            <p>
              <div
                style={{
                  width: "50px",
                  height: "2px",
                  backgroundColor: "white",
                }}
              ></div>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p><h3 style={{color:"white"}}>Abdoul Madjid</h3></p>
            <p style={{color:"white",marginTop:"-5px"}}>PDG,Md-Service</p>

          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
        <Col md={10}>
        <p style={{fontWeight:"bold"}}>Nos services</p>
        <p style={{color:"#fd5521"}}><h1>Nous offrons divers services <br></br> 
        pour répondre à vos besoins</h1></p>
        
        </Col>
         <Col xs={4} md={2}>
            <Button
            className="btn"
              variant="primary"
              href="/projet"
              style={{
                backgroundColor: "#fd5521",
                border: "none",
                padding: "20px 20px",
                fontSize: "20px",
                marginTop: "30px",
              }}
            >
              Lire plus
            </Button>{" "}
          </Col>
        </Row>
      </Container>
      <Container style={{marginTop:"40px"}}>
        <Row className="dad">
          <Col className="vide" ></Col>
          <Col>
          <div className="carre">
          <p className="rond">1</p>
            <p style={{fontWeight:"bold"}}>Peinture murale en ciment blanc</p>
          </div>
          </Col>
          <Col  >
          <div className="carre">
          <p className="rond">2</p>
          <p style={{fontWeight:"bold"}}>Décoration de jardins avec ciment blanc</p>
          </div>
          </Col>
          <Col  >
          <div className="carre">
          <p className="rond">3</p>
          <p style={{fontWeight:"bold"}}>Peinture de mobilier en ciment blanc</p>
          </div>
          </Col>
          
          
        </Row>
        <Row className="dad">
         
          <Col  >
          <div className="carre">
          <p className="rond">4</p>
          <p style={{fontWeight:"bold"}}>Peinture intérieure</p>
          </div>
          </Col>
          <Col  >
          <div className="carre">
            <p className="rond">5</p>
          <p style={{fontWeight:"bold"}}>Peinture extérieure </p>
          </div>
          </Col>
          <Col  >
          <div className="carre">
          <p className="rond">6</p>
          <p style={{fontWeight:"bold"}}>Peinture décorative</p>
          </div>
          </Col >
          <Col className="vide"></Col>

        </Row>
        
      </Container>


      <Container style={{marginTop:"30px"}}>
        <Row>
        <Col xs={12}>
        <p style={{fontWeight:"bold"}}>Nos Activités</p>
        <p style={{color:"#fd5521"}}><h1>Nos Projets </h1></p>
      
        </Col>
         
        </Row>
      </Container>
      <Container fluid style={{marginTop:"50px"}}>
        <Row>
        <Col xs={12} md={3}>
          <img className="actImg" src={image1}/>
        </Col>
        <Col xs={12} md={6}>
        <img className="actImg" src={image2}/>
        </Col>
        <Col xs={12} md={3}>
        <img className="actImg" src={image3}/>
        </Col>
         
        </Row>
      </Container>
      
      <Footer/>
    </>
  );
};

export default Home;
