import React, { Component } from 'react';

class Users extends Component {
    render() {
        return (
            <div>
                <h2>User list</h2>
                <button type="button" onClick={this.props.get_users}> Get users</button>
                <hr />
                <ul>
                    {
                        this.props.users.map(user => 
                        <li onClick={() => this.props.select_user(user)} key={user._id}>
                            {this.props.activeUser && this.props.activeUser._id === user._id ? <b> {user.name} </b>: user.name}
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}

export default Users;