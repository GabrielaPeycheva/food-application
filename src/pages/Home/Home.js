import React from 'react';

import styles from './Home.module.scss';

const Home = (props) => {

    return (
        <div className={styles.homeWrapper}>
            <h1 className={styles.title}>Welcome</h1>
            <h2 className={styles.title}>to FOODSTY</h2>
        </div>
    );
};

export default Home;