import React, { useContext } from 'react';
import RecipeList from '../Recipes/RecipeList/RecipeList';
import { RecipeContext } from '../../context/RecipeContext';

import styles from './MyRecipes.module.scss';

const MyRecipes = ({ match }) => {
    const { savedRecipes } = useContext(RecipeContext);

    return (
        <div className={styles.savedRecipesWrapper}>
            <h1>My Recipes</h1>
            <div className={styles.recipesTitleWrapper}>
                { savedRecipes && savedRecipes.length
                    ? <RecipeList recipes={savedRecipes} match={match} path='saved-recipes' name='delete'/>
                    : <h1>No Saved Recipes</h1>
                }
            </div>
        </div>
    );
};

export default MyRecipes;
