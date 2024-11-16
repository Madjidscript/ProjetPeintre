import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Error from '../../../utils/Error';
import Projet from './Projet';
import InscriptionUser from './inscriUser';
import Utulisateur from './utilisateur';
import Modif from './modif';
import Supp from './supp';


const AdminRouter = (props) => {
    return (
        <>
        <Routes>
            <Route index element={<Utulisateur/>}/>
            <Route path='projet' element={<Projet/>}/>
            <Route path='inscriUser' element={<InscriptionUser/>}/>
            <Route path='user' element={<Utulisateur/>}/>
            <Route path='modif/:id' element={<Modif/>}/>
            <Route path='supp/:id' element={<Supp/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
        </>
    );
};

export default AdminRouter;