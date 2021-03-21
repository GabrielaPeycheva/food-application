import React from 'react';

import styles from './Button.module.scss';

const Button = ({ onClick, type }) => {

    const buttonType = (type) => {
        switch (type) {
            case 'refresh': return 'get new';
            case 'ok': return 'ok';
            default: return '';
        }
    };

    return (
        <div
            className={styles.styledButton}
            onClick={onClick}
        >
            {buttonType(type)}
        </div>
    );
};

export default Button;