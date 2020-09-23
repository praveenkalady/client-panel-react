import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect} from 'react-redux-firebase';
import Spinner from '../layouts/Spinner';

class Clients extends Component {
    
    state = {
        totalOwed:null
    }

    static getDerivedStateFromProps(props,state){
        const { clients } = props;
        if(clients){
            const total = clients.reduce((total,client)=>{
                return total + parseFloat(client.balance.toString());
            },0)
            return { totalOwed:total }
        } else{
            return null;
        }
    }

    render() {
        const { clients } = this.props;
        const { totalOwed } = this.state;
        if(clients){
            return (
                <div>
                <div className="row">
                    <div className="col-md-6">
                        <h2>
                            {' '}
                            <i class="fa fa-users"></i>{' '} Clients
                        </h2>
                    </div>
                    <div className="col-md-6">
                    <h5 className="text-right text-secondary">
                    Total Owed {' '}
                    <span className="text-primary">${parseFloat(totalOwed).toFixed(2)}</span>
                    </h5>
                    </div>
                    <table class="table table-striped mt-3">
                        <thead class="thead-dark">
                        <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Balance</th>
                        <th/>
                        </tr>
                        </thead>
                        <tbody>
                        {clients.map(client => (
                            <tr key={client.id}>
                                <td>{client.firstName} {client.lastName}</td>
                                <td>{client.email}</td>
                                <td>${parseFloat(client.balance).toFixed(2)}</td>
                                <td>
                                    <Link to={`/client/${client.id}`} className="btn btn-secondary btn-sm">
                                    <i className="fa fa-arrow-circle-right"></i> Details
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            )
        }
       else{
           return (
               <Spinner />
           )
       }
    }
}

export default compose(firestoreConnect([{ collection:'clients'}]),
   connect((state,props) =>({
       clients:state.firestore.ordered.clients
   }))
)(Clients);
