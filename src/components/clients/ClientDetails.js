import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect} from 'react-redux-firebase';
import Spinner from '../layouts/Spinner';

class ClientDetails extends Component {
    render() {
        const { client } = this.props;
        if(client){
            return (
                <div>
                    <div class="row">
                        <div class="col-md-6">
                            <Link to="/" className="btn btn-link">
                                <i className="fa fa-arrow-circle-left"></i>{' '}
                                Back To Dashboard
                            </Link>
                        </div>
                        <div class="col-md-6">
                            <div class="btn-group float-right">
                                <Link to={`/client/edit/${client.id}`} class="btn btn-dark btn-sm">Edit</Link>
                                <button class="btn btn-danger btn-sm">Delete</button>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div class="card">
                        <h3 class="card-header">
                        {client.firstName} {client.lastName}
                        </h3>
                        <div class="card-body">
                           <div class="row">
                           <div class="col-md-8 col-sm-6">
                           <h4>Client ID:{' '} <span class="text-secondary">{client.id}</span></h4>
                           </div>
                           <div class="col-md-4 col-sm-6">
                           <h3 className="pull-right">Balance: ${parseFloat(client.balance).toFixed(2)}</h3>
                           </div>
                           </div>
                           <hr/>
                           <ul class="list-group">
                            <li class="list-group-item">Contact Email: {client.email}</li>
                            <li class="list-group-item">Contact Email: {client.phone}</li>
                           </ul>
                        </div>
                    </div>
                </div>
            );
        } else{
            return (
                <Spinner />
            )
        }
       
    }
}

export default compose(firestoreConnect(props => [
    {
        collection:'clients', storeAs:'client', doc:props.match.params.id
    }
]),
connect(({ firestore: { ordered } },props) => ({
    client:ordered.client && ordered.client[0]
}))
)(ClientDetails);
