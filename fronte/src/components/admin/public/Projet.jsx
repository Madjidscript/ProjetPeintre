import React, {useState} from 'react';
// import { Form } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
// import {api} from "../../../services/apiService";
import axios from "../../../services/collerService";
import { useNavigate } from 'react-router-dom';
import Hearder from '../../public/Hearder';
import Loader from '../../public/loader';

const Projet = (props) => {
  const navigate= useNavigate()
   
    // const envoi = (e)=>{
    //     e.preventDefault();
    //     console.log("mon data",formData);

    //     axios.post('/projet',formDatas)
    //     .then(response => {
    //       console.log('Réponse de l\'API :', response);
    //     })
    //     .catch(error => {
    //       console.error('Erreur lors de la requête :', error);
    //     });
        
       
    // }
   //const local= localStorage.getItem("Mydata")
   //console.log("mon local",local);
    const [nom,setNon]=useState('')
    const [description,setDescription]=useState('')
    const [image,setImage]=useState('')
    const envoi = (e)=>{
        e.preventDefault();
        console.log("Non:", nom)
        console.log("description:", description)
        console.log("Image:", image)
        e.preventDefault();
           
      // Créer une instance de FormData
    const formData = new FormData();

    // Ajouter les valeurs des champs du formulaire à FormData
          formData.append('nom', nom);
          formData.append('description', description);
         formData.append('image', image);
         console.log("mondata hooo",formData);
            axios.post('/admin/projet',formData)
            .then(response => {
              console.log('Réponse de l\'API :', response);
             
            })
            .catch(error => {
              console.error('Erreur lors de la requête :', error);
            });
    }
   

    return (
    <>
    <Loader></Loader>
   <Hearder/>
  
  <Form onSubmit={envoi} enctype="multipart/form-data" >  
    <Row>
        <Col md={4}>
            <Form.Group  className="mb-3" controlId="nameProjet">
                 <Form.Label>Non du projet</Form.Label>
                <Form.Control type="text" placeholder="entrer lenon du projet" name="nom" value={nom}  onChange={(e)=>setNon(e.target.value)} ></Form.Control>
            </Form.Group>
        </Col>
        <Col md={4}>
            <Form.Group  className="mb-3" controlId="desProjet">
                 <Form.Label>Non du projet</Form.Label>
                <Form.Control type="text" placeholder="entrer lenon du projet" name="description" value={description}  onChange={(e)=>setDescription(e.target.value)}></Form.Control>
            </Form.Group>
        </Col>
        <Col md={4}>
            <Form.Group  className="mb-3" controlId="imageProjet">
                 <Form.Label>Non du projet</Form.Label>
                <Form.Control type="file" placeholder="entrer lenon du projet"  name="image" onChange={(e)=>setImage(e.target.files[0])}  ></Form.Control>
            </Form.Group>
        </Col>
        <Row>
            <Col xs={2}>
            <Button type='submit'> valider</Button>
            </Col>
        </Row>
        
    
    </Row>
   </Form>
    </>    
    
    );
};

export default Projet;