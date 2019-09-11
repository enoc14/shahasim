import React from 'react';
import iasd from '../../images/iasd.png';

const Footer = () => {
    return(
        <div className="container-fluid bg-primary">
            <div className="row p-3">
                <div className="col-4 text-center">
                    <img src={iasd} alt="IASD" width="50" height="50"/>
                    <h5 className="text-white mt-2">Iglesia Adventista del Sétpimo Día</h5>
                </div>
                <div className="col-4 text-center">
                    <h5 className="text-white">Direccion</h5>
                    <p>Priv. Fernando San Pedro #112</p>
                </div>
                <div className="col-4 text-center">
                    <h5 className="text-white">Red social</h5>
                    <i className="fa fa-facebook-square"></i>
                </div>
                <div className="col-12">
                    <p className="text-center">&copy; Copyright 2019 | Club Shahasim</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;