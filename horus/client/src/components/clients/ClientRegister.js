import React from 'react';

class ClientRegister extends React.Component{
    state = {
        fname: null,
        lname: null,
        identification: null,
        cellphone: null,
        phone: null,
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
        hobbies: null,
    }

    handleChange = (e) => {
        this.setState({
            fname: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault(); {/*Prevents the default behaviour of refresh the page when submit */}
        console.log('Form submitted', this.state.fname)
    }
    render(){
        return(
            <div className="container">
                <h2>Registrar usuario: {this.state.fname}</h2>
                <form onSubmit={this.handleSubmit}> {/* OnSubmit takes the event when a user clicks on submit button or press enter */}
                    {/*names*/}
                    <label>Nombres: </label><br/>
                    <input type="text" onChange={this.handleChange} placeholder="ej. andres felipe"/><br/>
                    {/*last names*/}
                    <label>Apellidos: </label><br/>
                    <input type="text" placeholder="ej. camargo valverde"/><br/>
                    {/*identification*/}
                    <label>Cédula: </label><br/>
                    <input type="text" placeholder="ej. 1144001002"/><br/>
                    {/*cellphone*/}
                    <label>Teléfono: </label><br/>
                    <input type="text" placeholder="ej. 3183001234"/><br/>
                    {/*phone*/}
                    <label>Teléfono: </label><br/>
                    <input type="text" placeholder="ej. 3311910"/><br/>
                    {/*email*/}
                    <label>Correo: </label><br/>
                    <input type="text" placeholder="ej. alguien@hotmail.com"/><br/>
                    {/*password*/}
                    <label>Contraseña Gymanager: </label><br/>
                    <input type="text" placeholder="ej. *******"/><br/>
                    {/*birthdate*/}
                    <label>Fecha de Nacimiento: </label><br/>
                    <input type="text" placeholder="ej. 1990-01-01"/><br/>
                    {/*sex*/}
                    <label>Sexo: </label><br/>
                    <input type="text" placeholder="ej. Femenino"/><br/>
                    {/*country*/}
                    <label>País: </label><br/>
                    <input type="text" placeholder="ej. Colombia"/><br/>
                    {/*state*/}
                    <label>Departamento: </label><br/>
                    <input type="text" placeholder="ej. Colombia"/><br/>
                    {/*city*/}
                    <label>Ciudad: </label><br/>
                    <input type="text" placeholder="ej. Cali"/><br/>
                    {/*postal code*/}
                    <label>Código Postal: </label><br/>
                    <input type="text" placeholder="ej. 71000"/><br/>
                    {/*sicknesess*/}
                    <label>Enfermedades: </label><br/>
                    <input type="text" placeholder="ej. Cali"/><br/>
                    {/*surgeries*/}
                    <label>Cirugias: </label><br/>
                    <input type="text" placeholder="ej. Cali"/><br/>
                    {/*emergency contact*/}
                    <label>Contacto de Emergencia: </label><br/>
                    <input type="text" placeholder="ej. sebastian camargo"/><br/>
                    {/*profession*/}
                    <label>Profesión: </label><br/>
                    <input type="text" placeholder="ej. profession"/><br/>
                    {/*hobbies*/}
                    <label>Hobbies: </label><br/>
                    <input type="text" placeholder="ej. lectura"/><br/>

                    <br/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }

}

export default ClientRegister;