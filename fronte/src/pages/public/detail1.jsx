
import React, { useEffect, useState} from 'react';
import axios from "../../services/collerService";
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from "react-bootstrap/Image";
import  "../public/css/details1.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const Detail1 = (props) => {
    const domain = 'http://localhost:4000/'
   const {id} = useParams()
   console.log("mon id ",id);
   const [datas,setDatas]=useState([])
    useEffect (()=>{
        axios.get(`/detail/${id}`)
        .then(res => {
          console.log('Réponse de l\'API :', res.data.recup);
         setDatas(res.data.recup)
        })
        .catch(error => {
          console.error('Erreur lors de la requête :', error);
        });
    
    },[id]
    )
    return (
        
        <>
          <Container>
            <Row className='box1'>
                <Col xs={12} md={7} className='images'>
                <Image src={datas.image && domain + datas.image.replace(/\\/g, '/')} />
                </Col>
                <Col xs={12} md={4} className='text1'>
                    <p> <a href="/projet"><FontAwesomeIcon icon={faTimes} size="2x" color="red" /></a></p>
                    <p> <h1>{datas.nom}</h1> </p>
                    <p>{datas.description}</p>
                </Col>
            </Row>
            
          </Container> 
          
        </>
    );
};

export default Detail1;