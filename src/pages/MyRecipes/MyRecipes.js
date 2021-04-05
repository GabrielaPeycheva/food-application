import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import RecipeList from '../Recipes/RecipeList/RecipeList';
import Spinner from '../../components/Spinner/Spinner';

import styles from './MyRecipes.module.scss';

const MyRecipes = (props) => {
    const { currentUser } = useContext(AuthContext);
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        let values = [];
        let keys = Object.keys(sessionStorage);
        let i = keys.length;

        while ( i-- ) {
            values.push(JSON.parse(sessionStorage.getItem(keys[i])));
        }

        setRecipes(JSON.parse(sessionStorage.getItem(currentUser.email)));
        setIsLoading(false);
    }, [currentUser.email]);

    return (
        <div className={styles.savedRecipesWrapper}>
            <h1>My Recipes</h1>
            <div className={styles.recipesTitleWrapper}>
                { !isLoading
                    ? recipes
                        ? <RecipeList recipes={recipes} match={props.match} path='saved-recipes' name='delete'/>
                        : <h1>No Saved Recipes</h1>
                    : <Spinner/>
                }
            </div>

        </div>
    );
};

export default MyRecipes;
