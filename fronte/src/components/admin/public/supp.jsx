
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "../../../services/collerService";
import Loader from '../../public/loader';

const Supp = (props) => {
    const {id}=useParams()
    const [data ,setDatas]= useState([])
    const nav = useNavigate()
        useEffect (()=>{
            
            axios.delete(`/admin/supp/${id}`)
            .then(res => {
              console.log('Réponse de l\'API :', res);
              if (res) {
                nav("/admin/user")
              }
             setDatas(res.data.recup)
             
            })
            .catch(error => {
              console.error('Erreur lors de la requête :', error);
            });
        
        },[id])
    return (
       
        <>
            
            supprimer
        </>
    );
};

export default Supp;