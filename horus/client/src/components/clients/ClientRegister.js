import React from 'react';

class ClientRegister extends React.Component{
    state = {
        fname: "",
        lname: ""
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
            <div>
<<<<<<< HEAD
                <h1>Registering Client with name {this.state.fname}</h1>
                <form onSubmit={this.handleSubmit}> {/* OnSubmit takes the event when a user clicks on submit button or press enter */}
                    <input type="text" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
=======
                <h1>Register Client</h1>
                <p>Olalalala</p>
>>>>>>> d82844eec0a450c810ad249c6219153842b9610b
            </div>
        )
    }

}

export default ClientRegister;