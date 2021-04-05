import React, { useCallback, useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Form from '../../components/Form/Form';
import { AuthContext } from '../../context/AuthContext';
import config from '../../utils/config';

import styles from  './Login-Register.module.scss';

const Login = () => {
    const [err, setErr] = useState('');
    const { currentUser } = useContext(AuthContext);

    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await config
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
            } catch (error) {
                setErr(error.message);
            }
        },
        []
    );

    if (currentUser) {
        return (
            <Redirect to="/recipes" />
            // <div className={styles.wrapperContainer}>
            //     <p className={styles.signedIn}>Successfully sign in!</p>
            //     <Link to="/"><Button name="home"/></Link>
            // </div>
        )
    }

    return (
        <div className={styles.wrapperContainer}>
            <h1 className={styles.header}>Sign In</h1>
            <Form handleLogin={handleLogin} err={err} name='login'/>
            <Link to="/register" className={styles.registerBtn}>Register now</Link>
        </div>
    );
};

export default Login;
