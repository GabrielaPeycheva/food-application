import React, { Component } from 'react';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';

import styles from '../Login-Register.module.scss';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            errors: [],
            pwdState: ''
        };
    }

    showValidationErr(elm, msg) {
        this.setState((prevState) => ({
            errors: [
                ...prevState.errors, {
                    elm,
                    msg
                }
            ]
        }));
    }

    clearValidationErr(elm) {
        this.setState((prevState) => {
            let newArr = [];
            for (let err of prevState.errors) {
                if (elm !== err.elm) {
                    newArr.push(err);
                }
            }
            return {errors: newArr};
        });
    }

    onUsernameChange(e) {
        this.setState({username: e.target.value});
        this.clearValidationErr("username");
    }

    onEmailChange(e) {
        this.setState({email: e.target.value});
        this.clearValidationErr("email");
    }

    onBlur(e) {
        this.setState({password: e.target.value});

        if (e.target.value.length < 8) {
            this.showValidationErr("password", "Your password must be at least 8 characters");
        }else {
            this.clearValidationErr("password");
        }

    }


    submitRegister(e) {
        e.preventDefault()

        if (this.state.username === '') {
            this.showValidationErr("username", "Username Cannot be empty!");
        }
        if (this.state.email === '') {
            this.showValidationErr("email", "Email Cannot be empty!");
        }
        if (this.state.password === '') {
            this.showValidationErr("password", "Password Cannot be empty!");
        }

    }

    render() {

        let usernameErr = null,
            passwordErr = null,
            emailErr = null;

        for (let err of this.state.errors) {
            if (err.elm === "username") {
                usernameErr = err.msg;
            }
            if (err.elm === "password") {
                passwordErr = err.msg;
            }
            if (err.elm === "email") {
                emailErr = err.msg;
            }
        }

        return (
            <div className={styles.wrapperContainer}>
                <div className={styles.form}>
                    <div className={styles.header}>
                        Register
                    </div>
                    <div className={styles.box}>

                        <div className={styles.inputGroup}>
                            <label htmlFor="username">Username</label>
                            <Input
                                type="text"
                                name="username"
                                placeholder="Username"
                                onChange={this.onUsernameChange.bind(this)}/>
                            <small className={styles.dangerError}>{usernameErr ? usernameErr : ""}</small>
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="email">Email</label>
                            <Input
                                type="text"
                                name="email"
                                placeholder="Email"
                                onChange={this
                                    .onEmailChange
                                    .bind(this)}/>
                            <small className={styles.dangerError}>{emailErr ? emailErr : ""}</small>
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="password">Password</label>
                            <Input
                                type="password"
                                name="password"
                                placeholder="Password"
                                onBlur={this.onBlur.bind(this)}/>
                            <small className={styles.dangerError}>{passwordErr ? passwordErr : ""}</small>
                        </div>

                        <Button
                            type="register"
                            onClick={this.submitRegister.bind(this)} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;