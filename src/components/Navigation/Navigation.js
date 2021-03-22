import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = () => {
    return (
        <React.Fragment>
             <NavLink to="/recipes" className={styles.navlink} >All Recepies</NavLink>
            <NavLink to="/fun-facts" className={styles.navlink}>Fun Food Facts</NavLink>
        </React.Fragment>
    );
};

export default Navigation;