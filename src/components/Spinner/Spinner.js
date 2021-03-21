import React from 'react';
import styles from './Spinner.module.scss';
import spinner from '../../assets/images/spinner2.gif';

const Spinner = () => {
    return (
        <div className={styles.spinnerContainer}>
            <img
                src={spinner}
                alt="Loading page"
            />
        </div>
    );
};

export default Spinner;