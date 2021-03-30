import React from 'react';

import styles from './Input.module.scss';

const Input = ({
    type,
    name,
    placeholder,
    onChange
}) => {
    return (
        <input
            type={type}
            name={name}
            className={styles.input}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}

export default Input;