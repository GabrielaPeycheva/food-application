import React from 'react';
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

import styles from './Logo.module.scss';

const Logo = () => {
    return (
        <NavLink to="/">
            <div className={styles.logo}>
                <span>F</span>
                <img className={styles.logo} src={logo} alt="Food Logo" />
                <img className={styles.logo} src={logo} alt="Food Logo" />
                <span>D&nbsp;S&nbsp;T&nbsp;Y</span>
            </div>
        </NavLink>
    );
};

export default Logo;