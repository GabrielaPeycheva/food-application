import React from 'react';
import Spinner from '../../../components/Spinner/Spinner';

import styles from './RecipeList.module.scss';


const RecipeList = ({recipes}) => {

    return (
        <React.Fragment>
            { recipes && recipes.length ?
                recipes.map((res) =>
                <div className={styles.recipeContainer} key={res.id}>
                    <p>{res.title}</p>
                    <img src={res.image} className={styles.recipeImg} width="350" alt={res.title} />
                </div>)
                : <Spinner/>
            }
        </React.Fragment>
    );
};

export default RecipeList;