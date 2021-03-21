import React from 'react';
import Navigation from '../Navigation/Navigation';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <NavLink to="/" >Logo</NavLink>
            <Navigation />
        </div>
    );
};

export default Header;