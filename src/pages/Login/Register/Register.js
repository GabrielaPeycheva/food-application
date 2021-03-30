import React, { useCallback, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../components/Auth/Auth';
import config from '../../../config';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';

import styles from '../Login-Register.module.scss';

const Register = () => {

    const [err, setErr] = useState('');

    const handleRegister = useCallback(async event => {
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

    const { currentUser } = useContext(AuthContext);

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
            <form onSubmit={handleRegister}>
                <div className={styles.box}>
                    <div className={styles.inputGroup}>
                        <label htmlFor='email'>Email</label>
                        <Input name='email' type="email" placeholder="Email" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor='password'>Password</label>
                        <Input name="password" type="password" placeholder="Password" />
                        {err ? <small className={styles.dangerError}>{err}</small> : null }
                    </div>
                    <Button type="submit" name='register' />
                </div>
            </form>
        </div>
    );
};

export default Register;