import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.scss';

const Navigation = () => {
    return (
        <React.Fragment>
            <NavLink to="/" exact className={styles.navlink} >Home</NavLink>
            <NavLink to="/recipes" className={styles.navlink} >Find Recipe...</NavLink>
            <NavLink to="/saved-recipes" className={styles.navlink} >Saved Recipes</NavLink>
            {/*<NavLink to="/login" className={styles.navlink} >Login</NavLink>*/}
            <NavLink to="/food-facts" className={styles.navlink} >Food Facts</NavLink>
        </React.Fragment>
    );
};

export default Navigation;