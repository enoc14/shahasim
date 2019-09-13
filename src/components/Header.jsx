import React from 'react';
import { Link } from 'react-router-dom';

import { topFunction } from './stuffs'
import shahasim from '../images/shahasim.png';

const Header =  () => {

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <div className="nav-div-img">
                        <img src={shahasim} className="nav-img-r" alt="SHAHASIM"></img>
                    </div>
                    <div className="nav-div-text">
                        <span className="nav-nombre">Club Shahasim</span>
                        <span className="nav-lema">"Lorem ipsum lorem ipsum lor"</span>
                    </div>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            Inicio
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Nosotros
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link className="dropdown-item" to="/nosotros#historia">Historia</Link>
                            <Link className="dropdown-item" to="/nosotros#actividades">Actividades recientes</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contacto">Contacto</Link>
                    </li>
                </ul>
            </div>
            <button onClick={topFunction} id="myBtn" title="Go to top">
                <i className="fa fa-rocket"></i>
            </button> 
        </nav>
    );
}

export default Header;