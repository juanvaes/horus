import React from 'react';
import {Navbar} from 'reactstrap'

class SideBar extends React.Component {
    render() {
        return(
            <div>
                <h3>Menú</h3>
                <a href="/"></a>
                <a href="/users">Usuarios</a>
                <a href="/payments">Pagos</a>
            </div>
        );
    }
}

export default SideBar;