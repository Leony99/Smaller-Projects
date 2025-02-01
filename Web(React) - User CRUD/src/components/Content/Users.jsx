import { Fragment, Component } from 'react';
import axios from 'axios';

import Header from "../Header.jsx";

import "../../styles/Content.css";

const apiUsersUrl = 'http://localhost:3001/Users';
const initialState = {
    user: {name : '', email : ''},
    users: []
}

export default class Users extends Component {

    state = initialState;

    componentDidMount() {
        axios.get(apiUsersUrl)
            .then(response => {
                this.setState({ users: response.data });
            })
            .catch(error => console.log(error));
    }

    clear() {
        this.setState({ user: initialState.user });
    }

    save() {
        const user = this.state.user;
        const method = user.id ? 'put' : 'post';
        const url = user.id ? `${apiUsersUrl}/${user.id}` : apiUsersUrl;

        axios[method](url, user)
            .then(response => {
                const users = this.getUpdatedList(response.data);
                this.setState({ user: initialState.user, users });
                this.clear();
            })
            .catch(error => console.log(error));
    }

    getUpdatedList(user) {
        const list = this.state.users.filter(el => el.id !== user.id);
        list.push(user);
        return list;
    }

    updateField(event) {
        const user = { ...this.state.user };
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" name="name" placeholder="Enter name"
                            value={this.state.user.name} onChange={e => this.updateField(e)} />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control" name="email" placeholder="Enter email"
                            value={this.state.user.email} onChange={e => this.updateField(e)} />
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                        onClick={e => this.save(e)}>
                            Save
                        </button>

                        <button className="btn btn-secondary ms-2"
                        onClick={e => this.clear(e)}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    load(user) {
        this.setState({ user });
    }

    remove(user) {
        axios.delete(`${apiUsersUrl}/${user.id}`)
            .then(response => {
                const users = this.state.users.filter(el => el !== user);
                this.setState({ users });
            })
            .catch(error => console.log(error));
    }

    renderTable() {
        return (
            <table className="m-0">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return (
            this.state.users.map(user => (
                <tr key={user.id}>
                    <td className="align-middle" data-label="Name">{user.name}</td>
                    <td className="align-middle" data-label="Email">{user.email}</td>
                    <td className="align-middle text-center actions" data-label="Actions">
                        <button className="btn btn-warning"
                        onClick={() => this.load(user)}>
                            Edit
                        </button>
                        <button className="btn btn-danger ms-2"
                        onClick={() => this.remove(user)}>
                            Delete
                        </button>
                    </td>
                </tr>
            ))
        )
    }

    render() {
        return (
            <Fragment>
                <Header icon="users" title="Users" />
                <main className="content container-fluid">
                    <div className="p-3 m-3">
                        {this.renderForm()}
                    </div>
                    <div className="p-3 m-3 table-responsive">
                        {this.renderTable()}
                    </div>
                </main>
            </Fragment>
        )
    }
}