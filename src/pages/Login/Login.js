import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import styles from  './Login-Register.module.scss';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    submitLogin(e) {
        e.preventDefault();
        console.log('log')
    }

    render() {
        return (
            <div className={styles.wrapperContainer}>
                <div className={styles.form}>
                    <div className={styles.header}>
                        Login
                    </div>
                    <div className={styles.box}>

                        <div className={styles.inputGroup}>
                            <label htmlFor="username">Username</label>
                            <Input
                                type="text"
                                name="username"
                                placeholder="Username"/>
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="password">Password</label>
                            <Input
                                type="password"
                                name="password"
                                placeholder="Password"/>
                        </div>

                        <Button
                            type="login"
                            onClick={this
                                .submitLogin
                                .bind(this)}/>

                    </div>
                <NavLink to="/register" className={styles.registerBtn}>Register now</NavLink>
            </div>
        </div>
        );
    };
};

export default Login;