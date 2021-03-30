import React, { Component } from 'react';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';

import styles from '../Login-Register.module.scss';

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            errors: [],
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
        this.setState({username: e.target.value.trim()});
        this.clearValidationErr("username");
    }

    onEmailChange(e) {
        this.setState({email: e.target.value.trim()});
        this.clearValidationErr("email");
    }

    onChangePassword(e) {
        this.setState({password: e.target.value.trim()});
        this.clearValidationErr("password");
    }


    submitRegister(e) {
        e.preventDefault();

        if (this.state.username === '' || this.state.username.length < 3) {
            this.showValidationErr("username", "Your password must be at least 3 characters");
        }
        if (this.state.email === '' || !emailRegex.test(this.state.email)) {
            this.showValidationErr("email", "Your email is invalid");
        }
        if (this.state.password === '' || this.state.password.length < 5) {
            this.showValidationErr("password", "Your password must be at least 5 characters");
        }

    }

    render() {
        console.log(this.state.username.length)
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
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={this.onEmailChange.bind(this)}/>
                            <small className={styles.dangerError}>{emailErr ? emailErr : ""}</small>
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="password">Password</label>
                            <Input
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={this.onChangePassword.bind(this)}/>
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