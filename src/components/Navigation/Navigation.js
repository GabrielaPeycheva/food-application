import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import config from '../../utils/config';
import { AuthContext } from '../../context/AuthContext';
import { RecipeContext } from '../../context/RecipeContext';
import Button from '../Button/Button';
import { ReactComponent as SearchIcon } from '../../assets/images/icon-search.svg';

import styles from './Navigation.module.scss';

const Navigation = () => {
    const { currentUser } = useContext(AuthContext);
    const { savedRecipes } = useContext(RecipeContext);

    return (
        <React.Fragment>
            {currentUser ?
                <>
                    <NavLink to="/recipes" className={styles.navlink}>Find Recipe <SearchIcon /></NavLink>
                    <NavLink to="/food-facts" className={styles.navlink} >Food Facts</NavLink>
                    <NavLink to="/saved-recipes" className={styles.navlink}>Saved Recipes ({savedRecipes.length})</NavLink>
                    <NavLink to="/login" exact >
                        <Button onClick={() => config.auth().signOut()} name='signout' />
                    </NavLink>
                </>
                :
                <>
                    <NavLink to="/" exact className={styles.navlink} >Home</NavLink>
                    <NavLink to="/login">
                        <Button name='login' />
                    </NavLink>
                </>
            }
        </React.Fragment>
    );
};

export default Navigation;