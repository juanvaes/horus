import React from 'react';

class DynamicInput extends React.Component{
    state = {
        items: [],
    }

    render(){
        return(
        <div id="element">
            <div className="row">
                <div className="col-lg-11">
                    {/*hobbies*/}
                    <h4><label>Hobbies: </label></h4>
                    <input type="text" id="hobbies" onBlur={this.handleHobbieChange} placeholder="ej. lectura"/>
                </div>
                <div className="col-lg-1">
                    <button onClick={this.createHobbie} className="add-input">Añadir</button>
                </div>
            </div>
        </div>
        )
    }
}

export default DynamicInput;