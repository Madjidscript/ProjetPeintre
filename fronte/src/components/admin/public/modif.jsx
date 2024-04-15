import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import React, { useState } from "react";
import axios from "../../../services/collerService";
import Hearder from '../../public/Hearder';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Loader from "../../public/loader";
const Modif = (props) => {
    //const navigate = useNavigate();
  const {id}= useParams()
  console.log("mon id hooo",id);
  const [data,setDatas]=useState([])
  useEffect (()=>{
    axios.get(`/admin/utilisateur/${id}`)
    .then(res => {
      console.log('Réponse de l\'API :', res.data.recup);
     setDatas(res.data.recup)
     
    })
    .catch(error => {
      console.error('Erreur lors de la requête :', error);
    });

},[id]

)
const handleChange = (e) => {
  const { name, value } = e.target;
  setDatas({ ...data, [name]: value });
};
const handleImageChange = (e) => {
  setDatas({ ...data, image: e.target.files[0] });
};



 
    const [password, setPassword] = useState("");
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [fonction,SetFonction] = useState("");
    const [image, setImage] = useState("");

    const envois = (e) => {
      e.preventDefault();
      console.log("Non:", data.nom);
      console.log("password:", data.password);
      console.log("email:", data.email);
      console.log("fonction:", data.fonction);
      console.log("image:", data.image);
      
      const formdata  = new FormData()
      formdata.append("nom",data.nom)
      formdata.append("email",data.email)
      formdata.append("password",data.password)
      formdata.append("fonction",data.fonction)
      formdata.append("image",data.image)
  
      e.preventDefault();
    //   let data = {
    //     nom: nom,
    //     email: email,
    //     password: password,
    //     fonction:fonction,
    //     image:image
    //    };
  
      console.log("mon objet", formdata);
  
      axios
        .post(`/admin/modif/${id}`,formdata)
        .then((response) => {
          console.log("Réponse de l'API :", response,"mon message",response.data.data);
  
          setTimeout(() => {
            console.log("Fonction exécutée après 3 secondes");
            //navigate("/auth/connexion");
            window.location.reload()
          }, 90000);
        })
        .catch((error) => {
          console.error("Erreur lors de la requête :", error);
        });
    };
   

   

    return (
      <div>
        <Loader></Loader>
        <Hearder/>
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
                    value={data.nom}
                    onChange={handleChange}
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
                    value={data.email}
                    onChange={handleChange}
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
                    value={data.password}
                    onChange={handleChange}
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
                    value={data.fonction}
                    onChange={handleChange}
                    name="fonction"
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col xs={12}>
              <Form.Group  className="mb-3" controlId="imageProjet">
                   <Form.Label>Non du projet</Form.Label>
                  <Form.Control type="file" placeholder="entrer lenon du projet"  name="image"  onChange={handleImageChange} ></Form.Control>
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
  
  export default Modif;
  