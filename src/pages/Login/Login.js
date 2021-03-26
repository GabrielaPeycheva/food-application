import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import styles from  './Login.module.scss';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    submitLogin(e) {console.log('log')}

    render() {
        return (
            <div className={styles.wrapperContainer}>
                <div className={styles.register}>
                    <div className={styles.header}>
                        Login
                    </div>
                    <div className={styles.box}>

                        <div className={styles.inputGroup}>
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                name="username"
                                className={styles.logInput}
                                placeholder="Username"/>
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                className={styles.logInput}
                                placeholder="Password"/>
                        </div>

                        <button
                            type="button"
                            className={styles.logBtn}
                            onClick={this
                                .submitLogin
                                .bind(this)}>Login</button>

                    </div>
                <NavLink to="/register">Register now</NavLink>
            </div>
        </div>
        );
    };
};

export default Login;