import React from 'react';
import Hearder from '../../components/public/Hearder2';
import {  Outlet} from "react-router-dom";
import Footer from '../../components/public/Footer';

const Layouts = (props) => {
    return (
        
        <div>
            <Hearder/>
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Layouts;