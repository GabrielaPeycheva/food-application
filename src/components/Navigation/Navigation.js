import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import config from '../../config';
import { AuthContext } from '../Auth/Auth';
import Button from '../Button/Button';

import styles from './Navigation.module.scss';

const Navigation = () => {
    const {currentUser} = useContext(AuthContext);
    return (
        <React.Fragment>
            {currentUser ?
                <>
                    <NavLink to="/recipes" className={styles.navlink}>Find Recipe...</NavLink>
                    <NavLink to="/food-facts" className={styles.navlink} >Food Facts</NavLink>
                    <NavLink to="/saved-recipes" className={styles.navlink}>Saved Recipes</NavLink>
                    <NavLink to="/login" exact >
                        <Button onClick={() => config.auth().signOut()} name='signout' />
                    </NavLink>
                </>
                :
                <>
                    <NavLink to="/" exact className={styles.navlink} >Home</NavLink>
                    <NavLink to="/login" className={styles.navlink} >Login</NavLink>
                </>
            }
        </React.Fragment>
    );
};

export default Navigation;