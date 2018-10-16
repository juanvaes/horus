import React from 'react';
import {Navbar} from 'reactstrap'

class SideBar extends React.Component {
    render() {
        return(
            <div>
                <h3>Menú</h3>
                <a src="#">Usuarios</a>
                <a src="#">Pagos</a>
            </div>
        );
    }
}

export default SideBar;