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
                console.log(res.data.data);
                this.setState({ clients: res.data })
            })
    }

    render(){
        return(
            <div>
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
                        <tr>
                            <td>1</td>
                            <td>1144076879</td>
                            <td>Juan</td>
                            <td>Valencia</td>
                            <td>Siempre</td>
                            <td>Si</td>
                            <td>No</td>
                            <td>Pionero</td>
                            <td>2018/01/14</td>
                            <td>Ver</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>1144041716</td>
                            <td>John</td>
                            <td>Valencia</td>
                            <td>Media</td>
                            <td>No</td>
                            <td>No</td>
                            <td>Pionero</td>
                            <td>2018/01/12</td>
                            <td>Ver</td>
                        </tr>
                    </tbody>
                </table>
            <ul>
                {this.state.clients}
            </ul>
            </div>
        )
    }
}

export default ClientTable;