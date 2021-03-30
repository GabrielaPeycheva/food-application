import React from 'react';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

import styles from './Header.module.scss';

const Header = () => {

    return (
        <div className={styles.headerWrapper}>
            <Logo />
            <div className={styles.navigation}>
                <Navigation />
            </div>
        </div>
    );
};

export default Header;