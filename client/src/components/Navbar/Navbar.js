import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import './Navbar.css';


export default withAuth(class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { authenticated: null };
        this.checkAuthentication = this.checkAuthentication.bind(this);
        this.checkAuthentication();
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    async checkAuthentication() {
        const authenticated = await this.props.auth.isAuthenticated();
        if (authenticated !== this.state.authenticated) {
            this.setState({ authenticated });
        }
    }

    componentDidUpdate() {
        this.checkAuthentication();
    }

    async login() {
        this.props.auth.login('/');
    }

    async logout() {
        this.props.auth.logout('/')
    }

    render() {
        if (this.state.authenticated === null) return null;
        return (
            <nav className='navbar'>
                <span className='homenav'><Link to='/'>Home</Link></span>
                {this.state.authenticated ?
                <span className='dynav'><button onClick={this.logout}>Log Out</button></span> :
                <span className='dynav'><button onClick={this.login}>Login</button></span>}
            </nav>
        )
    }
})
