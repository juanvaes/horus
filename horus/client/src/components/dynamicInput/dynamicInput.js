import React from 'react';

class DynamicInput extends React.Component{
    state = {
        name: "",
        items: [],
    }

    handleChange = (event) => {
        this.setState({
            items: [...this.state.items, event.target.value],
        })
        console.log(this.state.items);
    }

    render(){
        return(
        <div id="element">
            <div className="row">
                <div className="col-lg-11">
                    {/*hobbies*/}
                    <h4><label>Hobbies: </label></h4>
                    <input type="text" id="items" onChange={this.handleChange} placeholder="ej. lectura"/>
                </div>
                <div className="col-lg-1">
                    <button className="add-input">Añadir</button>
                </div>
            </div>
        </div>
        )
    }
}

export default DynamicInput;