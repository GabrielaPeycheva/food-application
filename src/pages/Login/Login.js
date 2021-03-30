import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import styles from  './Login-Register.module.scss';

const Login = () => {
    const [user, setUser] = useState({username:'', password:''});

   const submitLogin = (e) => {
        e.preventDefault();
    }

    return (
        <div className={styles.wrapperContainer}>
            <div className={styles.form}>
                <div className={styles.header}>
                    Sign In
                </div>
                <div className={styles.box}>

                    <div className={styles.inputGroup}>
                        <label htmlFor="username">Username</label>
                        <Input
                            type="text"
                            name="username"
                            placeholder="Username"
                            onChange={(e) => {setUser({...user, username: e.target.value})}}
                            />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <Input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={(e) => {setUser({...user, password: e.target.value})}}
                            />
                    </div>

                    <Button
                        type="login"
                        onClick={submitLogin}/>

                </div>
            <NavLink to="/register" className={styles.registerBtn}>Register now</NavLink>
        </div>
    </div>
    );
};

export default Login;