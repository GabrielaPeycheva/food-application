import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = () => {
    return (
        <React.Fragment>
            <NavLink to="/recipes">All Recepies</NavLink>
            <NavLink to="/fun-facts">Fun Food Facts</NavLink>
        </React.Fragment>
    );
};

export default Navigation;