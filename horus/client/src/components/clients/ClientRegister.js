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
            <div className="container">
                <h1>Registering Client with name {this.state.fname}</h1>
                <form onSubmit={this.handleSubmit}> {/* OnSubmit takes the event when a user clicks on submit button or press enter */}
                    <input type="text" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }

}

export default ClientRegister;