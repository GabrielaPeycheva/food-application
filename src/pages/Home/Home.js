import React, { useCallback, useEffect, useState } from 'react';
import * as foodService from '../../services/foodService';
import Button from '../../components/Button/Button';

import styles from './Home.module.scss';

const Home = (props) => {
    const [trivialFact, setTrivialFact] = useState({});

    const onClickGetNew = () => {
        foodService.getTrivialFact()
            .then(res => {
                const result = res;
                setTrivialFact(res);
            });
    };

    useEffect(() => onClickGetNew(), []);
    return (
        <div className={styles.homeWrapper}>
            <h1 className={styles.title}>Welcome</h1>
            <p key={trivialFact.text}>{trivialFact.text}</p>
            <Button type="refresh" onClick={onClickGetNew} />
        </div>
    );
};

export default Home;