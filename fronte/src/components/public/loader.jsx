import React, { useEffect } from 'react';

import "./loader.css";
const Loader = (props) => {
    useEffect(() => {
        // Masquer le loader lorsque la page est entièrement chargée
        window.onload = function() {
            document.getElementById("loaderContainer").style.display = "none";
        };
    }, []);
    return (
        
        <div class="loader-container" id="loaderContainer">
        <div class="loader"></div>
      </div>
    );
};

export default Loader;