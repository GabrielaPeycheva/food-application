import React from 'react';

import styles from './Input.module.scss';

const Input = ({
    type,
    name,
    placeholder
}) => {
    return (
        <input
            type={type}
            name={name}
            className={styles.input}
            placeholder={placeholder}
        />
    )
}

export default Input;