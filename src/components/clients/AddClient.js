import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';

class AddClient extends Component {
    state = {
        firstName: '',
        lastName: '',
        email:'',
        phone:'',
        balance:''
    }

    onSubmit = e => {
        e.preventDefault();
        const newClient = this.state;
        if(newClient.balance === ''){
            newClient.balance = 0;
        }
        const { firestore, history } = this.props;

        firestore.add({ collection: 'clients' },newClient).then(() => history.push('/'));
    }

    onChange = (e) => {
        this.setState({ [e.target.name]:e.target.value })
    }

    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-md-6">
                    <Link to="/" className="btn btn-link">
                    <i className="fa fa-arrow-circle-left"></i>{' '}
                    Back to Dashboard
                    </Link>
                    </div>
                </div>
                <div class="card">
                <div class="card-header">Add Client</div>
                    <div class="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input value={this.state.firstName} onChange={this.onChange} type="text" class="form-control" name="firstName" required />
                                </div>
                                <div class="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input value={this.state.lastName} onChange={this.onChange} type="text" class="form-control" name="lastName" required />
                                </div>
                                <div class="form-group">
                                <label htmlFor="email">Email</label>
                                <input value={this.state.email} onChange={this.onChange} type="email" class="form-control" name="email" required />
                                </div>
                                <div class="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input value={this.state.phone} onChange={this.onChange} type="text" class="form-control" name="phone" required />
                                </div>
                                <div class="form-group">
                                <label htmlFor="balance">Balance</label>
                                <input value={this.state.balance} onChange={this.onChange} type="text" class="form-control" name="balance" required />
                        </div>
                        <input type="submit" value="Submit" className="btn btn-block btn-primary" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default firestoreConnect()(AddClient);
