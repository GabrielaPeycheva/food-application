import React from 'react';

import styles from './Home.module.scss';

const Home = (props) => {

    return (
        <div className={styles.homeWrapper}>
            <h1 className={styles.title}>Welcome</h1>
            <h2 className={styles.title}>to FOODSTY</h2>
            <h3>With this app you can find delicious and easy to prepare recipes! Let`s start!</h3>
        </div>
    );
};

export default Home;