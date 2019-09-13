import React from 'react';
import iasd from '../../images/iasd.png';

const Footer = () => {
    return(
        <div className="container-fluid bg-primary">
            <div className="row p-3">
                <div className="col-12 col-md-4 mb-4 text-center">
                    <h5 className="text-white">IASD</h5>
                    <img src={iasd} alt="IASD" width="50" height="50" title="Iglesia Adventista del Séptimo Día"/>
                </div>
                <div className="col-12 col-md-4 mb-3 text-center">
                    <h5 className="text-white">Direccion</h5>
                    <p>Priv. Fernando San Pedro #112</p>
                </div>
                <div className="col-12 col-md-4 text-center">
                    <h5 className="text-white">Red social</h5>
                    <i className="fa fa-facebook-square fa-size-md"></i>
                </div>
                <div className="col-12">
                    <hr className="hr-footer"/>
                    <p className="text-center no-p no-mb">&copy; Copyright 2019 | Club Shahasim</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;