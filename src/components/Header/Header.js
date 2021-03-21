import React from 'react';
import Navigation from '../Navigation/Navigation';

import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <p>Logo</p>
            <Navigation/>
        </div>
    );
};

export default Header;