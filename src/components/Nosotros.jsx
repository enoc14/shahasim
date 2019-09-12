import React from 'react';

const Nosotros = () => {
    return(
        <div className="container mt-4 mb-4">
            <div className="row">
                <h1 id="actividades">Actividades recientes</h1>
                <hr className="my-3" style={{display: "block", width: "100%"}}/>
                <div className="col-12 col-md-6 col-lg-4">
                    <div class="card text-white bg-primary mb-3">
                        <div class="card-header">Header</div>
                        <div class="card-body">
                            <h4 class="card-title">Primary card title</h4>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div class="card bg-secondary mb-3">
                        <div class="card-header">Header</div>
                        <div class="card-body">
                            <h4 class="card-title">Primary card title</h4>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div class="card text-white bg-primary mb-3">
                        <div class="card-header">Header</div>
                        <div class="card-body">
                            <h4 class="card-title">Primary card title</h4>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row"></div>
        </div>
    );
}

export default Nosotros;