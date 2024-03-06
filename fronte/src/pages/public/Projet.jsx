import React, { useEffect, useState } from 'react';
import Hearder from '../../components/public/Hearder';
import Container from 'react-bootstrap/esm/Container';
import Image from "react-bootstrap/Image";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import  "../public/css/projet.css";
import axios from "../../services/collerService";
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/public/Footer';

const Projet = (props) => {
    const domain = 'https://projetpeintre.onrender.com/'
    let navigate = useNavigate()
     const [data ,setData]= useState([])
    useEffect (()=>{
        axios.get('/projet')
        .then(res => {
          console.log('Réponse de l\'API :', res.data.recup);
          setData(res.data.recup)
        })
        .catch(error => {
          console.error('Erreur lors de la requête :', error);
        });
    
    },[]
    )
    const navigateToDetail = (id) => {
        navigate("../detail1/" + id);
    }
    
    const md = (id) => {
        navigateToDetail(id);
    }
    // const md =(id)=>{
    //     navigate("../detail1/"+id)
    // }

    return (
        <>
        <Hearder ></Hearder>
        <Container className="parent" >
            <Row>
                <Col xs={12}>
                <p style={{fontSize:"20px", fontWeight:"bold"}}>Nos projets</p>
                </Col>
                <Col xs={12}>
                <h1 style={{color: "#fd5521"}}>
                Nos projets sont durables
                </h1>
                </Col>
            </Row>
        </Container>

        <Container>
            <Row>
               
                { data.map((element,index)=>{
                  return(   <Col xs={6} md={4} className='box'>
                        <div key={index}>
                            <div  className='image'><Image src={domain + element.image.replace(/\\/g, '/')}  onClick={() => md(element._id)} /></div>
                            
                            <div  className='nom'>{element.nom}</div>
                        </div>
                        {/* onClick={md(element._id)} */}
                   </Col>
                    )})
                }
            </Row>
        </Container>
        <Footer/>
        </>
         
      
    );
};

export default Projet;