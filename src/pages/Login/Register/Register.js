import React, { useCallback, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import config from '../../../utils/config';
import Form from '../../../components/Form/Form';
import Button from '../../../components/Button/Button';

import styles from '../Login-Register.module.scss';

const Register = () => {
    const { currentUser } = useContext(AuthContext);
    const [err, setErr] = useState('');

    const onSubmitHandler = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await config
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
        } catch (error) {
            setErr(error.message);
        }
    }, []);

    if (currentUser) {
        return (
            <div className={styles.wrapperContainer}>
                <p className={styles.signedIn}>Successful Registration!</p>
                <Link to="/"><Button name="home"/></Link>
            </div>
        )
    }
    return (
        <div className={styles.wrapperContainer}>
            <h1 className={styles.header}>Register</h1>
            <Form onSubmitHandler={onSubmitHandler} err={err} name='register'/>
        </div>
    );
};

export default Register;