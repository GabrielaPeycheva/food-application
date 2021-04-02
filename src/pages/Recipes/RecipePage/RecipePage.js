import React, { useEffect, useState } from 'react';
import RecipeList from '../RecipeList/RecipeList';
import SearchInput from '../../../components/SearchInput/SearchInput';
import Spinner from '../../../components/Spinner/Spinner';
import * as foodService from '../../../services/foodService';

import styles from './RecipePage.module.scss';

const RecipePage = (props) => {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const onClick = (params) => {
        setIsLoading(true);
        foodService.getSearchedRecipes(params)
            .then(res => {
                setRecipes(res.results);
                setIsLoading(false);
            });

    }

    useEffect(() => {
        foodService.getRandomRecipes()
            .then(res => {
                setRecipes(res.recipes);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className={styles.recipePageContainer}>
            <SearchInput onClick={onClick} />
            {  isLoading
                ? <Spinner/>
                : recipes.length
                // : recipes
                    ? <RecipeList recipes={recipes} match={props.match} path='recipes' name='add'/>
                    : <h1>Sorry, we did not found recipes with this name :(</h1>
            }
        </div>
    );
};

export default RecipePage;