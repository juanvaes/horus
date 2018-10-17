import React from 'react';
import {Navbar} from 'reactstrap'

class SideBar extends React.Component {
    render() {
        return(
            <div>
                <h3>Menú</h3>
                <a href="/">Inicio</a>
                <a href="/client">Usuarios</a>
                <a href="/payment">Pagos</a>
            </div>
        );
    }
}

export default SideBar;