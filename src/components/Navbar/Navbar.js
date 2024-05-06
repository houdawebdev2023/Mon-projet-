import React, {useState,useEffect} from 'react';
import "./Navbar.css"
const Navbar = () => {
    return(
        <nav>
        <ul className='liste'>

            <li className="items"><a href="src/pages/pageCalculator.js">Calculator</a></li>
            <li className="items"><a href="src/pages/pageConvertisseur.js"></a>Convertisseur</li>
            <li className="items"><a href="src/pages/pageWeather.js"></a>Weather</li>

        </ul>
        </nav>
        );

    
};

export default Navbar;