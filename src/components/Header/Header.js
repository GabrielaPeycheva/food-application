import React from 'react';
import Navigation from '../Navigation/Navigation';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <NavLink to="/"><img className={styles.logo} src={logo} alt="Food Logo" /></NavLink>
            <div className={styles.navigation}>
                <Navigation />
            </div>
        </div>
    );
};

export default Header;