import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Error from '../../../utils/Error';
import Projet from './Projet';


const AdminRouter = (props) => {
    return (
        <>
        <Routes>
            <Route index element={<Projet/>}/>
            <Route path='projet' element={<Projet/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
        </>
    );
};

export default AdminRouter;