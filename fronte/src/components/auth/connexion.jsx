import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import React, { useEffect, useState } from "react";
import axios from "../../services/collerService";
import { useNavigate } from "react-router-dom";
import { accountService } from "../../services/accountService";
import Loader from "../public/loader";


const Connexion = (props) => {
  const navigate= useNavigate()
  useEffect(() => {
    const local = localStorage.getItem("Mydata");
    console.log("monlocal des",local)
    if (local) {
      console.log("mon local", local);
      navigate("/admin/projet");
    }
  }, []); 
  const inscrit =()=>{
    return navigate("/auth/inscription")
  }
 
  
 
  const [dataAPi, setdataApi] = useState([]);
  // const [mesDonnes,setMesdonnes]=useState("")
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const envois = (e) => {
    e.preventDefault();
    console.log("password:", password);
    console.log("email:", email);

    e.preventDefault();
    let data = {
      email: email,
      password: password,
    };

    console.log("mon objet", data);

    axios
      .post("/admin/connexion", data)
      .then((response) => {
        console.log("Réponse de l'API :", response.data.data2,"monmessage", response.data.message);
        const info = response.data.data2;
        setdataApi(response.data.data2);
        setMessage(response.data.message)
        if (info && info !== undefined) {
          const donner = JSON.stringify(response.data.data2);
          //const local = JSON.parse(localStorage.getItem('Mydata'))
          accountService.savelocal(donner)
          //localStorage.setItem("Mydata", donner);

          setTimeout(() => {
            console.log("Fonction exécutée après 3 secondes");
            navigate("/admin/projet");
          }, 3000);
        } else {
          navigate("/auth/connexion");
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la requête :", error);
        navigate("/auth/connexion");
        console.log("ils semble avoir une erreur dans votre authentification");
      });

    // useEffect(()=>{
    //   const local = JSON.parse(localStorage.getItem('Mydata'))
    //   if (local) {
    //    setMesdonnes(local)
    //   }

    //  },[])
    //  const ajoutLocal = ()=>{
    //    const nouveldonne =JSON.stringify(setdataApi)
    //    setMesdonnes(nouveldonne)
    //    localStorage.setItem("Mydata",nouveldonne)
    //  }
  };

  return (
    <div>
      <Loader></Loader>
      <Container style={{ marginTop: "40px" }}>
        <Form onSubmit={envois}>
          <Row style={{ padding: "5px 20px", marginBottom: "25px" }}>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="email">
              {message && <p>{message}</p>}
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
              <span>
              <Button className="bouton" onClick={inscrit} style={{marginLeft:"5px"}}>
                inscription
              </Button>
            </span>
            </Col>
          
             
           
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default Connexion;
