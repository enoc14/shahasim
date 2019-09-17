import React, { useState } from 'react';

const initState = {
    inputNombre: { value: '', error: true },
    inputApellidos: { value: '', error: true },
    inputCelular: { value: '', error: true },
    inputEdad: { value: 'Elija una edad', error: true }
}

let cl = 'form-control ';

const Contacto = () => {

    const inputs = ["inputNombre","inputApellidos","inputCelular","inputEdad"];
    const [formHandler, setFormHandler] = useState(initState);

    const rules = {
        inputNombre: new RegExp(/^[a-z\s]{3,}$/, 'i'),
        inputApellidos: new RegExp(/^[a-z\s]{3,}$/, 'i'),
        inputCelular: new RegExp('^[0-9]{10,10}$', 'i'),
        inputEdad: new RegExp('^[0-9]{2,2}$', 'i')
    }
    
    const handlerForm = event => {
        const {id, value} = event.target;
        test(id, value);
    }

    const test = (id, value) => {
        const error = !rules[id].test(value);
        setFormHandler({
            ...formHandler,
            [id]: {value, error}
        });
        console.log(`value: ${value}, error: ${error}, id: ${id}`);
        return error
    }

    const valid = () => {
        let errors = 0;
        inputs.map(id => errors += (test(id, formHandler[id]["value"])) ? 1 : 0);
        return errors === 0 ? true : false;
    }

    const blankForm = () => {
        setFormHandler(initState);
    }

    const submitForm = e => {
        e.preventDefault();
        console.log(formHandler);
        if (valid()) blankForm();
    }

    return(
        <div className="jumbotron bg-white">
            <h1>Únete a nosotros</h1>
            <fieldset className="mt-4">
                <form className="row" onSubmit={submitForm}>
                    <div className="form-group col-12 col-md-6 mb-4">
                        <label htmlFor="inputNombre">Nombre (s)</label>
                        <input 
                            type="text" value={formHandler["inputNombre"]["value"]}
                            className={cl += formHandler["inputNombre"]["error"] ? "is-invalid" : "is-valid"} id="inputNombre" 
                            placeholder="Ej. Juan Alberto" onChange={handlerForm}  />
                            <div className="invalid-feedback">Mínimo 3 caracteres (No números)</div>
                    </div>
                    <div className="form-group col-12 col-md-6 mb-4">
                        <label htmlFor="inputApellido">Apellidos</label>
                        <input 
                            type="text" value={formHandler["inputApellidos"]["value"]}
                            className={formHandler["inputApellidos"]["error"] ? "form-control is-invalid" : "form-control is-valid"} id="inputApellidos"
                            placeholder="Ej. Ramos Pérez" onChange={handlerForm} />
                            <div className="invalid-feedback">Mínimo 5 caracteres (No números)</div>
                    </div>
                    <div className="form-group col-12 col-md-6 mb-4">
                        <label htmlFor="inputApellido">Celular / Casa</label>
                        <input
                            type="text" value={formHandler["inputCelular"]["value"]}
                            className={formHandler["inputCelular"]["error"] ? "form-control is-invalid" : "form-control is-valid"} id="inputCelular"
                            placeholder="Ej. 8331234567" onChange={handlerForm}/>
                            <div className="invalid-feedback">Ingrese 10 números (Sin letras ni espacios)</div>
                    </div>
                    <div className="form-group col-12 col-md-6 mb-4">
                        <label htmlFor="inputEdad">Edad</label>
                        <select className={formHandler["inputEdad"]["error"] ? "form-control is-invalid" : "form-control is-valid"} id="inputEdad" onChange={handlerForm} value={formHandler["inputEdad"]["value"]}>
                            <option value="Elija una edad">Elija una edad</option>
                            <option value="10">10 años</option>
                            <option value="11">11 años</option>
                            <option value="12">12 años</option>
                            <option value="13">13 años</option>
                            <option value="14">14 años</option>
                            <option value="15">15 años</option>
                        </select>
                        <div className="invalid-feedback">Elija una edad correcta</div>
                    </div>
                    <div className="col-12 text-center">
                        <button type="submit" className="btn btn-outline-primary">Enviar</button>
                    </div>
                    {/*   
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

/*
const initState = {
    inputNombre: '',
    inputApellidos: '',
    inputCelular: '',
    inputEdad: 'Elija una edad'
}

const Contacto = () => {

    const inputs = ["inputNombre","inputApellidos","inputCelular","inputEdad"];

    const [formHandler, setFormHandler] = useState(initState);

    const rules = {
        inputNombre: new RegExp(/^[a-z\s]{3,}$/, 'i'),
        inputApellidos: new RegExp(/^[a-z\s]{3,}$/, 'i'),
        inputCelular: new RegExp('^[0-9]{10,10}$', 'i'),
        inputEdad: new RegExp('^[0-9]{2,2}$', 'i')
    }
    
    const handlerForm = event => {
        const {id, value} = event.target;
        setFormHandler({
            ...formHandler,
            [id]: value
        });
        handlerInputs(id);
    }

    const handlerInputs = (id) => test(id);

    const test = (id) => {
        const element = document.getElementById(id);
        const test = rules[id].test(element.value);

        if (test){
            element.classList.remove('is-invalid');
            element.classList.add('is-valid');
        }
        else{
            element.classList.remove('is-valid');
            element.classList.add('is-invalid');
        }
        return test;
    }

    const valid = () => {
        let errors = 0;
        inputs.map(id => errors += (test(id)) ? 0 : 1);
        return errors === 0 ? true : false;
    }

    const blankForm = () => {
        setFormHandler(initState);
        inputs.map(id => document.getElementById(id).classList.remove('is-valid'));
    }

    const submitForm = e => {
        e.preventDefault();
        console.log(formHandler);
        if (valid()) blankForm();
    }

    return(
        <div className="jumbotron bg-white">
            <h1>Únete a nosotros</h1>
            <fieldset className="mt-4">
                <form className="row" onSubmit={submitForm}>
                    <div className="form-group col-12 col-md-6 mb-4">
                        <label htmlFor="inputNombre">Nombre (s)</label>
                        <input 
                            type="text" value={formHandler["inputNombre"]}
                            className="form-control" id="inputNombre" 
                            placeholder="Ej. Juan Alberto" onChange={handlerForm}  />
                            <div className="invalid-feedback">Mínimo 3 caracteres (No números)</div>
                    </div>
                    <div className="form-group col-12 col-md-6 mb-4">
                        <label htmlFor="inputApellido">Apellidos</label>
                        <input 
                            type="text" value={formHandler["inputApellidos"]}
                            className="form-control" id="inputApellidos"
                            placeholder="Ej. Ramos Pérez" onChange={handlerForm} />
                            <div className="invalid-feedback">Mínimo 5 caracteres (No números)</div>
                    </div>
                    <div className="form-group col-12 col-md-6 mb-4">
                        <label htmlFor="inputApellido">Celular / Casa</label>
                        <input
                            type="text" value={formHandler["inputCelular"]}
                            className="form-control" id="inputCelular"
                            placeholder="Ej. 8331234567" onChange={handlerForm}/>
                            <div className="invalid-feedback">Ingrese 10 números (Sin letras ni espacios)</div>
                    </div>
                    <div className="form-group col-12 col-md-6 mb-4">
                        <label htmlFor="inputEdad">Edad</label>
                        <select className="form-control" id="inputEdad" onChange={handlerForm} value={formHandler["inputEdad"]}>
                            <option value="Elija una edad">Elija una edad</option>
                            <option value="10">10 años</option>
                            <option value="11">11 años</option>
                            <option value="12">12 años</option>
                            <option value="13">13 años</option>
                            <option value="14">14 años</option>
                            <option value="15">15 años</option>
                        </select>
                        <div className="invalid-feedback">Elija una edad correcta</div>
                    </div>
                    <div className="col-12 text-center">
                        <button type="submit" className="btn btn-outline-primary">Enviar</button>
                    </div>
                    {/*   
                    <div className="form-group col-12 col-md-6">
                        <label htmlFor="exampleInputEmail1">Correo</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    }
                </form>
            </fieldset>
        </div>
    );
}
*/
export default Contacto;