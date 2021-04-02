import React, { useState, useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Spinner from '../../../components/Spinner/Spinner';
import Modal from '../../../components/Modal/Modal';
import { AuthContext } from '../../../components/Auth/Auth';
import * as foodService from '../../../services/foodService';

import styles from './RecipeList.module.scss';

const RecipeList = ({ recipes, path, name }) => {
    const [recipeDetails, setRecipeDetails] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { currentUser } = useContext(AuthContext);
    const savedRecipes = JSON.parse(sessionStorage.getItem(currentUser.email)) || [];

    const getDetails = (value) => {
        setIsLoading(true);
        foodService.getRecipeDetail(value)
                .then(res => {
                    let instructions = [];
                        instructions = res.analyzedInstructions.filter(e => e.steps);
                    setRecipeDetails({
                        id: res.id,
                        steps: instructions,
                        title: res.title,
                        image: res.image,
                        readyInMinutes: res.readyInMinutes,
                        ingredients: res.extendedIngredients,
                        saved: savedRecipes.find(r => r.id === res.id),
                        deleted: savedRecipes.find(r => r.id !== res.id)
                    })
                    setIsModalOpen(true);
                    setIsLoading(false);
                });
    }


    const saveHandler = () => {
        savedRecipes.push(recipeDetails);
        window.sessionStorage.setItem(currentUser.email, JSON.stringify(savedRecipes));

    }

    const deleteHandler = (id) => {
        let updatedRecipes = savedRecipes.filter( a => a.id !== id);
        window.sessionStorage.setItem(currentUser.email, JSON.stringify(updatedRecipes));
    }

    useEffect(() => deleteHandler(),[currentUser.email])
    return (
        <React.Fragment>
            { recipes && recipes.length ?
                recipes.map((res) =>
                    <NavLink to={{pathname: `${path}/details/id`, search:`${res.id}`}} key={res.id}>
                        <div className={styles.recipeContainer} onClick={() => getDetails(res.id)}>
                            <p>{res.title}</p>
                            <img src={res.image} className={styles.recipeImg} width="350" alt={res.title} />
                            <p>View recipe</p>
                        </div>
                    </NavLink>)
                 : <Spinner/>
            }
            <Modal
                saveHandler={saveHandler}
                deleteHandler={deleteHandler}
                savedRecipes={savedRecipes}
                recipeDetails={recipeDetails}
                isModalOpen={isModalOpen}
                isLoading={isLoading}
                path={path}
                name={name}
                handleClose={() => {
                    setIsModalOpen(false);
                    setRecipeDetails({});
                }}
            />
        </React.Fragment>
    );
};

export default RecipeList;