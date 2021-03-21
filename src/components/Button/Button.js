import React from 'react';

import styles from './Button.module.scss';

const Button = (props) => {

    const buttonType = (type) => {
        switch (type) {
            case 'refresh': return 'get new';
            case 'ok': return 'ok';
            default: return '';
        }
    }
    return (
        <div
            className={styles.styledButton}
            onClick={() => console.log('kliknat sum')}
        >
            {buttonType(props.type)}
        </div>
    )
}

export default Button;