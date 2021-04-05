import React from 'react';

import styles from './RecipeCard.module.scss';

const RecipeCard = ({onClick, title, src}) => {
    return (
        <div className={styles.recipeContainer} onClick={onClick}>
            <p>{title}</p>
            <img src={src} className={styles.recipeImg} width="350" alt={title} />
            <p>View recipe</p>
        </div>
    );
};

export default RecipeCard;