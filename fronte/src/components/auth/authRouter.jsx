import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Error from '../../utils/Error';
import Inscription from './inscription';
import Connexion from './connexion';

const AuthRouter = (props) => {
    return (
        <>
        <Routes>
            <Route index element={<Inscription/>}/>
            <Route path='inscription' element={<Inscription/>}/>
            <Route path='connexion' element={<Connexion/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
        </>
    );
};

export default AuthRouter;