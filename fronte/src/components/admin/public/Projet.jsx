import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "../../../pages/public/css/ajoutprojet.css";
import axios from "../../../services/collerService";
import { useNavigate } from 'react-router-dom';
import Header from '../../public/Hearder'; // Correction du nom d'import si nécessaire
import Loader from '../../public/loader';

const Projet = (props) => {
  const navigate = useNavigate();
  
  const [nom, setNom] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const envoi = (e) => {
    e.preventDefault();
    
    // Créer une instance de FormData
    const formData = new FormData();
    formData.append('nom', nom);
    formData.append('description', description);
    formData.append('image', image);
    
    axios.post('/admin/projet', formData)
      .then(response => {
        console.log('Réponse de l\'API :', response);
        // Redirection ou autre action après succès
        navigate('/some-route');
      })
      .catch(error => {
        console.error('Erreur lors de la requête :', error);
      });
  };

  return (
    <>
      

      <Form onSubmit={envoi} className='parent d-flex justify-content-center '>
        <Row className="w-75">
          <Col xs={12} md={8} lg={12}>
            <Form.Group className="mb-3" controlId="nameProjet">
              <Form.Label>Nom du projet</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer le nom du projet"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="desProjet">
              <Form.Label>Description du projet</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer la description du projet"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="imageProjet">
              <Form.Label>Image du projet</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Form.Group>

            <Button type='submit' variant="primary">Valider</Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Projet;
