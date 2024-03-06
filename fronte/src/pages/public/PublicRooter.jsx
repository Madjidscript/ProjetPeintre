import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layouts from './Layouts';
import Home from './Home';
import Service from './Services';
import Contact from './Contact';
import Carrière from './Carrière';
import Projet from './Projet';
import Detail1 from './detail1';
import Error from '../../utils/Error';
import Postuler from './Postuler';

const PublicRouter = (props) => {
    return (
        
        <div>
            <Routes>
                {/* <Route element={<Layouts/>} > */}
                <Route index element={<Home/>} />
                <Route path='home' element={<Home/>} />
                <Route path='service' element={<Service/>} />
                <Route path='contact' element={<Contact/>} />
                <Route path='carriere' element={<Carrière/>} />
                <Route path='postuler' element={<Postuler/>} />
                <Route path='projet' element={<Projet/>} />
                <Route path='detail1/:id' element={<Detail1/>} />
                <Route path='*' element={<Error/>} />
                {/* </Route> */}
            </Routes>
        </div>
    );
};

export default PublicRouter;