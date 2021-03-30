import React from 'react';

import styles from './Button.module.scss';

const Button = ({ onClick, name }) => {

    const buttonType = (name) => {
        switch (name) {
            case 'refresh': return 'get new fact';
            case 'login': return 'sign in';
            case 'register': return 'register';
            case 'signout': return  'sign out';
            case 'home': return  'go to homepage';
            default: return '';
        }
    };

    return (
        <button
            className={styles.styledButton}
            onClick={onClick}
        >
            {buttonType(name)}
        </button>
    );
};

export default Button;