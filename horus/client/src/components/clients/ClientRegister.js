import React from 'react';
import axios from 'axios';

import DynamicInput from '../dynamicInput/dynamicInput'
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
        sicknesess: null,
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

    handleHobbieChange = (event) => {
        this.setState({
            hobbies: [...this.state.hobbies, event.target.value],
        })
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

    createHobbie = (event) => {
        event.preventDefault();
        const hobbieElement = document.getElementById('hobbies');
        var element = hobbieElement.childNodes[0].childNodes[0];
        var newInput = document.createElement('input');
        newInput.setAttribute('id','hobbies');
        newInput.setAttribute('type','text');
        newInput.addEventListener('change',this.handleHobbieChange)
        element.appendChild(newInput);
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
                    {/*Hobbies*/}
                    <DynamicInput hobbies={this.state.hobbies}></DynamicInput>
                    {/*sicknesses*/}
                    <DynamicInput></DynamicInput>
                    {/*surgeries*/}
                    <DynamicInput></DynamicInput>
                    {/*emergency contact*/}
                    <DynamicInput></DynamicInput>
                    
                    <br/>
                    <button className="register-button">Registrar</button>
                </form>
            </div>
        )
    }

}

export default ClientRegister;