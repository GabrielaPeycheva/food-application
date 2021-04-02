import React from 'react';

import styles from './Button.module.scss';

const Button = ({ onClick, name }) => {

    const buttonType = (name) => {
        switch (name) {
            case 'refresh': return 'get new fact';
            case 'login': return 'sign in';
            case 'register': return 'register';
            case 'signout': return  'sign out';
            case 'add': return 'add to my recipes';
            case 'delete': return 'Delete';
            case 'home': return  'go to homepage';
            default: return '';
        }
    };

    return (
        <button
            className = {` ${styles.styledButton}
             ${name === 'signout' ? styles.signOut : ''} 
             ${name === 'login' ? styles.signIn : ''}
             ${name === 'add' || name === 'delete' ? styles.addButton : ''}
             `}
            onClick={onClick}
        >
            {buttonType(name)}
        </button>
    );
};

export default Button;