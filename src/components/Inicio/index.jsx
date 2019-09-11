import React from 'react';
import Slide from './Slide';

const Inicio = () => {
    return(
        <div className="jumbotron">
            <h1 className="display-5">Nuestras activades</h1>
            <hr className="my-3" />
            <Slide className="inicio-slide" />
        </div>
    );
}

export default Inicio;