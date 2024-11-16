import React, { useEffect, useState } from 'react';
import Hearder from "../../public/Hearder";
import "./utilisateur.css"
import axios from "../../../services/collerService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Loader from '../../public/loader';


const Utulisateur = (props) => {
  const navigate = useNavigate()
  const domain = 'https://projetpeintre.onrender.com/'
  const [data ,setData]= useState([])
  let [search,setSearch]=useState("") 
  const onchanges = (e)=>{
    setSearch(e.target.value)
  }
  const ajout =()=>{
    navigate("/admin/inscriUser")
  }
  const modif =(id)=>{
    navigate("/admin/modif/" +id)
  }
  const supp =(id)=>{
    navigate("/admin/supp/" +id)
  }
  
  useEffect (()=>{
      axios.get('/admin/utilisateur')
      .then(res => {
        console.log('Réponse de l\'API :', res.data.recup);
        setData(res.data.recup)
      })
      .catch(error => {
        console.error('Erreur lors de la requête :', error);
      });
  
  },[]
  )

  const rechercheUser = data.filter(user=>{
    return user.nom.toLowerCase().includes(search.toLowerCase());
  })
    return (
        
        <>
        
        <Hearder/>
      <div  className="boxs">
        <div className="cards">
          <div className="hearder">
              <div className="texte"> <h5>Mes User</h5> </div>
              <div className="recherche">
                <span><button className='btn' onClick={ajout}>ajouter</button></span>
                <input type="text" className='recherches' onChange={onchanges} value={search} name="" id="" />
             </div>
          </div>
          <div className="body">
            <table>
  <thead>
    <tr>
      <th>Image</th>
      <th>Nom</th>
      <th>Email</th>
      <th>Fonction</th>
      <th>Actions</th>
    </tr>
  </thead>
  
  <tbody>
  { rechercheUser.map((element,index)=>{
    return(

    <tr key={index}>
      <td><img className="rond"  src={domain + element.image.replace(/\\/g, '/')} alt=""/></td>
      <td> {element.nom} </td>
      <td>{element.email}</td>
      <td>{element.fonction}</td>
      <td class="actions">
        
        <div onClick={()=>{supp(element._id)}}>
        <FontAwesomeIcon
        className="ms-auto"
        icon={faTrash}
        size="2x"
        color="red"
        cursor="pointer"
      />
        </div>
       
        <div onClick={()=>{modif(element._id)}} >
        <FontAwesomeIcon
        className="ms-auto"
        icon={faEdit}
        size="2x"
        color="blue"
        cursor="pointer"
      />
        </div>
        
        <div>
        <FontAwesomeIcon
        className="ms-auto"
        icon={faLock}
        size="2x"
        color="yellow"
        cursor="pointer"
      />
        </div>
      </td>
    </tr>
    )})
    }
  </tbody>
   
</table>
          </div>
        
        </div>

      </div>
     
        </>
    );
};

export default Utulisateur;