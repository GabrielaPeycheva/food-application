import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../components/Button/Button';

import styles from './Home.module.scss';

const Home = (props) => {

    return (
        <div className={styles.homeWrapper}>
            <h1 className={styles.title}>Welcome</h1>
            <h2 className={styles.title}>to FOODSTY</h2>
             <NavLink to="/login"><Button type="login" /></NavLink>
        </div>
    );
};

export default Home;