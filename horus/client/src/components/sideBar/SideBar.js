import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap'

class SideBar extends React.Component {
    render() {
        return(
            <div>
                <h3>Menú</h3>
                <Nav vertical>
                    <NavItem>
                        <NavLink href="/">Inicio</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/client">Usuarios</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/payment">Pagos</NavLink>
                    </NavItem>
                </Nav>

            </div>
        );
    }
}

export default SideBar;