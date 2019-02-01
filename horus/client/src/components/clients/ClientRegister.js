import React from 'react';
import axios from 'axios';
import './ClientRegister.css'

class ClientRegister extends React.Component{
    state = {
        fname: null,
        lname: null,
        identification: null,
        cellphone: null,
        phone: null,
        email: null,
        password: null,
        birthdate: null,
        sex: null,
        country: null,
        state: null,
        city: null,
        postal_code: null,
        sicknesess: [],
        surgeries: null,
        emergency_contact: null,
        profession: null,
        hobbies: [],
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault(); {/*Prevents the default behaviour of refresh the page when submit */}
        console.log('Form submitted', this.state);
        const user = this.state;

        axios.post('http://localhost:5000/api/client/', { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        this.setState({
        });
    }

    addHb1 = (event) => {
        event.preventDefault();
        const hb1 = document.getElementById('hb1');
        this.setState({
            hobbies: this.state.hobbies.concat({'hobbie': hb1.childNodes[0].value}),
            });
        }

    addHb2 = (event) => {
        event.preventDefault();
        const hb2 = document.getElementById('hb2');
        this.setState({
            hobbies: this.state.hobbies.concat({'hobbie': hb2.childNodes[0].value}),
            });
        }
    addHb3 = (event) => {
        event.preventDefault();
        const hb3 = document.getElementById('hb3');
        this.setState({
            hobbies: this.state.hobbies.concat({'hobbie': hb3.childNodes[0].value}),
            });
        }

    addSk1 = (event) => {
        event.preventDefault();
        const sk = document.getElementById('sk1');
        this.setState({
            sicknesess: this.state.sicknesess.concat({'sickness': sk.childNodes[0].value}),
            });
        }

    addSk2 = (event) => {
        event.preventDefault();
        const sk = document.getElementById('sk2');
        this.setState({
            sicknesess: this.state.sicknesess.concat({'sickness': sk.childNodes[0].value}),
            });
        }
    addSk3 = (event) => {
        event.preventDefault();
        const sk = document.getElementById('sk3');
        this.setState({
            sicknesess: this.state.sicknesess.concat({'sickness': sk.childNodes[0].value}),
            });
        }

    render(){
        return(
            <div className="container">
                <h2>Registrar usuario: {this.state.fname}</h2>
                <form onSubmit={this.handleSubmit}> {/* OnSubmit takes the event when a user clicks on submit button or press enter */}
                    <div className="row">
                        <div className="col-lg-6">
                            {/*names*/}
                            <h4><label>Nombres: </label></h4>
                            <input type="text" id="fname" onChange={this.handleChange} placeholder="ej. andres felipe"/>
                        </div>
                        <div className="col-lg-6">
                            {/*last names*/}
                            <h4><label>Apellidos: </label></h4>
                            <input type="text" id="lname" onChange={this.handleChange} placeholder="ej. camargo valverde"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            {/*cellphone*/}
                            <h4><label>Celular: </label></h4>
                            <input type="text" id="cellphone" onChange={this.handleChange} placeholder="ej. 3183001234"/>
                        </div>
                        <div className="col-lg-6">
                            {/*phone*/}
                            <h4><label>Teléfono: </label></h4>
                            <input type="text" id="phone" onChange={this.handleChange} placeholder="ej. 3311910"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            {/*email*/}
                            <h4><label>Correo: </label></h4>
                            <input type="text" id="email" onChange={this.handleChange} placeholder="ej. alguien@hotmail.com"/>
                        </div>
                        <div className="col-lg-6">
                            {/*password*/}
                            <h4><label>Contraseña Gymanager: </label></h4>
                            <input type="text" id="password" onChange={this.handleChange} placeholder="ej. *******"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            {/*birthdate*/}
                            <h4><label>Fecha de Nacimiento: </label></h4>
                            <input type="text" id="birthdate" onChange={this.handleChange} placeholder="ej. 1990-01-01"/>
                        </div>
                        <div className="col-lg-6">
                            {/*sex*/}
                            <h4><label>Sexo: </label></h4>
                            <input type="text" id="sex" onChange={this.handleChange} placeholder="ej. Femenino"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            {/*state*/}
                            <h4><label>Departamento: </label></h4>
                            <input type="text" id="state" onChange={this.handleChange} placeholder="ej. Colombia"/>
                        </div>
                        <div className="col-lg-6">
                            {/*city*/}
                            <h4><label>Ciudad: </label></h4>
                            <input type="text" id="city" onChange={this.handleChange} placeholder="ej. Cali"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            {/*postal code*/}
                            <h4><label>Código Postal: </label></h4>
                            <input type="text" id="postal_code" onChange={this.handleChange} placeholder="ej. 71000"/>
                        </div>
                        <div className="col-lg-6">
                            {/*profession*/}
                            <h4><label>Profesión: </label></h4>
                            <input type="text" id="profession" onChange={this.handleChange} placeholder="ej. profession"/>
                        </div>
                    </div>
                    
                    {/*GAP*/}
                    <br/><br/>
                    <hr/>
                    <br/>
                    <div id="hobbies">
                        {/*hobbies*/}
                        <h4><label>Hobbies: </label></h4>
                        <hr/>
                        <h6><label>Hobbie 1: </label></h6>
                        <div className="row">
                            <div className="col-lg-11">
                                <div id="hb1">
                                    <input type="text" id="hobbies" placeholder="ej. lectura"/>
                                </div>
                            </div>
                            <div className="col-lg-1">
                                <button onClick={this.addHb1} className="add-input">Añadir</button>
                            </div>
                        </div>
                        <h6><label>Hobbie 2: </label></h6>
                        <div className="row">
                            <div className="col-lg-11">
                                <div id="hb2">
                                    <input type="text" id="hobbies"  placeholder="ej. lectura"/>
                                </div>
                            </div>
                            <div className="col-lg-1">
                                <button onClick={this.addHb2} className="add-input">Añadir</button>
                            </div>
                        </div>
                        <h6><label>Hobbie 3: </label></h6>
                        <div className="row">
                            <div className="col-lg-11">
                                <div id="hb3">
                                    <input type="text" id="hobbies"  placeholder="ej. lectura"/>
                                </div>
                            </div>
                            <div className="col-lg-1">
                                <button onClick={this.addHb3} className="add-input">Añadir</button>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    
                    <div id="sicknesess">
                        {/*sicknesess*/}
                        <h4><label>Sicknesess: </label></h4>
                        <hr/>
                        <h6><label>Number 1: </label></h6>
                        <div className="row">
                            <div className="col-lg-11">
                                <div id="sk1">
                                    <input type="text" id="sicknesses"/>
                                </div>
                            </div>
                            <div className="col-lg-1">
                                <button onClick={this.addSk1} className="add-input">Añadir</button>
                            </div>
                        </div>
                        <h6><label>Number 2: </label></h6>
                        <div className="row">
                            <div className="col-lg-11">
                                <div id="sk2">
                                    <input type="text" id="sicknesses"/>
                                </div>
                            </div>
                            <div className="col-lg-1">
                                <button onClick={this.addSk2} className="add-input">Añadir</button>
                            </div>
                        </div>
                        <h6><label>Number 3: </label></h6>
                        <div className="row">
                            <div className="col-lg-11">
                                <div id="sk3">
                                    <input type="text" id="sicknesses"/>
                                </div>
                            </div>
                            <div className="col-lg-1">
                                <button onClick={this.addSk3} className="add-input">Añadir</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-11">
                                {/*surgeries*/}
                                <h4><label>Cirugias: </label></h4>
                                <input type="text" id="surgeries" onChange={this.handleChange} placeholder="ej. Cali"/>
                        </div>
                        <div className="col-lg-1">
                            <button className="add-input">Añadir</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-11">
                            {/*emergency contact*/}
                            <h4><label>Contacto de Emergencia: </label></h4>
                            <input type="text" id="emergency_contact" onChange={this.handleChange} placeholder="ej. sebastian camargo"/>
                            
                        </div>
                        <div className="col-lg-1">
                            <button className="add-input">Añadir</button>
                        </div>
                    </div>
                    <br/>
                    <button className="register-button">Registrar</button>
                </form>
            </div>
        )
    }

}

export default ClientRegister;