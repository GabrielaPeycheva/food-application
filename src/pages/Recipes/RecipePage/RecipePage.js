import React, { useEffect, useState } from 'react';
import RecipeList from '../RecipeList/RecipeList';
import SearchInput from '../../../components/SearchInput/SearchInput';
import * as foodService from '../../../services/foodService';

import styles from './RecipePage.module.scss';

const RecipePage = (props) => {
    const [recipes, setRecipes] = useState([]);

    const onClick = (params) => {
        foodService.getSearchedRecipes(params)
            .then(res => {
                setRecipes(res.results)
            });
    }

    useEffect(() => {
        foodService.getRandomRecipes()
            .then(res => {
                setRecipes(res.recipes)
            });
    }, []);

    return (
        <div className={styles.recipePageContainer}>
            <SearchInput onClick={onClick} />
            <RecipeList recipes={recipes} match={props.match}/>
        </div>
    );
};

export default RecipePage;