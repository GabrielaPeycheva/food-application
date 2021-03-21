import React, { useEffect, useState } from 'react';
import RecipeList from '../RecipeList/RecipeList';
import * as foodService from '../../../services/foodService';

import styles from './RecipePage.module.scss';

const RecipePage = (props) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        foodService.getRandomRecipes()
            .then(res => setRecipes({ recipes: res.recipes }))
    }, []);

    return (
        <div className={styles.recipePageContainer}>
            <RecipeList {...recipes} />
        </div>
    )
}
export default RecipePage;