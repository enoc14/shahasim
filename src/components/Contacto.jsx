import React, { useState } from 'react';

const Contacto = () => {

    const [formHandler, setFormHandler] = useState({
        inputNombre: '',
        inputApellidos: '',
        inputCelular: '',
        inputEdad: '10'
    });

    const handlerForm = event => {
        const {id, value} = event.target;
        setFormHandler({
            ...formHandler,
            [id]: value
        });
    }

    const submitForm = e => {
        e.preventDefault();
        console.log(formHandler);
    }

    return(
        <div className="jumbotron bg-white">
            <h1>Únete a nosotros</h1>
            <fieldset className="mt-4">
                <form className="row" onSubmit={submitForm}>
                    <div className="form-group col-12 col-md-6 mb-4">
                        <label htmlFor="inputNombre">Nombre (s)</label>
                        <input 
                            pattern=".{3,}" required title="Mínimo 3 caracteres"
                            type="text" className="form-control" id="inputNombre" 
                            placeholder="Ej. Juan Alberto" onChange={handlerForm}  />
                    </div>
                    <div className="form-group col-12 col-md-6 mb-4">
                        <label htmlFor="inputApellido">Apellidos</label>
                        <input 
                            pattern=".{5,}" required title="Mínimo 5 caracteres"
                            type="text" className="form-control" id="inputApellidos"
                            placeholder="Ej. Ramos Pérez" onChange={handlerForm} />
                    </div>
                    <div className="form-group col-12 col-md-6 mb-4">
                        <label htmlFor="inputApellido">Celular / Casa</label>
                        <input
                            pattern="[0-9]{10,10}" required title="Ingrese 10 números (NO letras)"
                            type="text" className="form-control" id="inputCelular"
                            placeholder="Ej. 8331234567" onChange={handlerForm}/>
                    </div>
                    <div className="form-group col-12 col-md-6 mb-4">
                        <label htmlFor="inputEdad">Edad</label>
                        <select className="form-control" id="inputEdad" onChange={handlerForm}>
                            <option value="10">10 años</option>
                            <option value="11">11 años</option>
                            <option value="12">12 años</option>
                            <option value="13">13 años</option>
                            <option value="14">14 años</option>
                            <option value="15">15 años</option>
                        </select>
                    </div>
                    <div className="col-12 text-center">
                        <button type="submit" className="btn btn-outline-primary">Enviar</button>
                    </div>
                    {/*       
                    <div class="form-group has-success">
                        <label class="form-control-label" for="inputSuccess1">Valid input</label>
                        <input type="text" value="correct value" class="form-control is-valid" id="inputValid">
                        <div class="valid-feedback">Success! You've done it.</div>
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="inputDanger1">Invalid input</label>
                        <input type="text" value="wrong value" class="form-control is-invalid" id="inputInvalid"/>
                        <div class="invalid-feedback">Sorry, that username's taken. Try another?</div>
                    </div>
                    
                    <div className="form-group col-12 col-md-6">
                        <label htmlFor="exampleInputEmail1">Correo</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    */}
                </form>
            </fieldset>
        </div>
    );
}

export default Contacto;