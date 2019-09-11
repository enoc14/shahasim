import React from 'react';
import { Link } from 'react-router-dom';

import shahasim from '../images/shahasim.png';

const Header =  () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link className="navbar-brand" to="/">
                <img src={shahasim} className="nav-img-r" alt="SHAHASIM" width="80" height="80"></img>
                <span className="nav-nombre">Club Shahasim</span>
                <span className="nav-lema">"Aquí va el lema"</span>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">
                            Inicio <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/nosotros">Nosotros</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contacto">Contacto</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;