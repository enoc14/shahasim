import React from 'react';

const Nosotros = () => {
    return(
        <div className="jumbotron">
            <div className="row">
                <h1 id="actividades">Actividades recientes</h1>
                <hr className="my-3" style={{display: "block", width: "100%"}}/>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card text-white bg-primary mb-3">
                        <div className="card-header">9 de Septiembre 2019</div>
                        <div className="card-body">
                            <h4 className="card-title">Servicio a la Comunidad</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <img className="img-fluid rounded" src="https://picsum.photos/300/300?random=1" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card bg-secondary mb-3">
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h4 className="card-title">Primary card title</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card text-white bg-primary mb-3">
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h4 className="card-title">Primary card title</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row"></div>
        </div>
    );
}

export default Nosotros;