import React, {useEffect, useState} from 'react';

import styles from './FoodFacts.module.scss';
import * as foodService from '../../services/foodService';
import Button from '../../components/Button/Button';

const FoodFacts = () => {
    const [trivialFact, setTrivialFact] = useState({});

    const onClickGetNew = () => {
        foodService.getTrivialFact()
            .then(res => {
                // const result = res;
                setTrivialFact(res);
            });
    };

    useEffect(() => onClickGetNew(), []);
    return (
        <div className={styles.foodFactsWrapper}>
            <h2>You can found here some interesting facts about food :)</h2>
            <p className={styles.fadeIn} key={trivialFact.text}>{trivialFact.text}</p>
            <span>If you want to read another fact just click on the button and.. voila</span>
            <Button type="submit" name='refresh' onClick={onClickGetNew} />
        </div>
    );
};

export default FoodFacts;