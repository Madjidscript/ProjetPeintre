import React, { useEffect } from 'react';

import "./loader.css";
const Loader = (props) => {
    useEffect(() => {
        // Masquer le loader lorsque la page est entièrement chargée
        window.onload = function() {
            document.getElementById("loaderContainer").style.display = "none";
        //     window.location.reload()
         };
        
    }, []);
    // setTimeout(() => {
    //     console.log("Cette fonction s'exécute après 1 seconde");
    //     window.location.reload()
    // }, 3000);
    return (
        
        <div class="loader-container" id="loaderContainer">
        <div class="loader"></div>
      </div>
    );
};

export default Loader;