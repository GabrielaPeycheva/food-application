import React from 'react';
import Button from '../../components/Button/Button';

import styles from './Home.module.scss';

const Home = (props) => {

    return (
        <div className={styles.homeWrapper}>
            <h1 className={styles.title}>Welcome</h1>
            <h1 key={props.text}>{props.text}</h1>
            <Button type="refresh" />
        </div>
    );
};

export default Home;