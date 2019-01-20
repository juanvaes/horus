import React from 'react';
import axios from 'axios';
import './ClientTable.css';


class ClientTable extends React.Component{

    state = {
        clients: []
    }

    componentDidMount(){
        axios.get('http://localhost:5000/api/clients')
            .then(res => {
                this.setState({ 
                    clients: res.data.data 
                })
            })
    }

    render(){
        const { clients } = this.state;
        const clientList = clients.length ? (
            clients.map(client => {
                return (
                    <tr key={client.id}>
                        <td>{client.id}</td>
                        <td>{client.identification}</td>
                        <td>{client.fname}</td>
                        <td>{client.lname}</td>
                        <td>Calculable</td>
                        <td>{client.is_competitor}</td>
                        <td>Calculable</td>
                        <td>Calculable</td>
                        <td>{client.last_day_visited}</td>
                        <td><a href="#">Ver</a></td>
                    </tr>
                )
            })
        ) : (
            <div className="center"> No hay clientes registrados </div>
        )
        return(
            <div className="client-page">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Cédula</th>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Actividad</th>
                            <th>Atleta</th>
                            <th>Debe?</th>
                            <th>Plan</th>
                            <th>Última Visita</th>
                            <th>Detalle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientList}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ClientTable;