import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap'
import "./sideBar.css"

class SideBar extends React.Component {
    render() {
        return(
            <div className="sidebar">
                <h3>Menú</h3>
                <Nav vertical>
                    <NavItem id="element">
                        <NavLink href="/">Inicio</NavLink>
                    </NavItem>
                    <NavItem id="element">
                        <NavLink href="/client">Usuarios</NavLink>
                    </NavItem>
                    <NavItem id="element">
                        <NavLink href="/payment">Pagos</NavLink>
                    </NavItem>
                </Nav>

            </div>
        );
    }
}

export default SideBar;