import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Spinner from '../../../components/Spinner/Spinner';
import Modal from '../../../components/Modal/Modal';
import * as foodService from '../../../services/foodService';

import styles from './RecipeList.module.scss';


const RecipeList = ({ recipes }) => {
    const [recipeDetails, setRecipeDetails] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const user ={};
    const getDetails = (value) => {
        setIsLoading(true);
        foodService.getRecipeDetail(value)
                .then(res => {
                    let instructions = [];
                        instructions = res.analyzedInstructions.filter(e => e.steps);
                    setRecipeDetails({
                        steps: instructions,
                        title: res.title,
                        image: res.image,
                        readyInMinutes: res.readyInMinutes,
                        ingredients: res.extendedIngredients,
                        // res
                    })
                    // debugger;
                    setIsModalOpen(true);
                    setIsLoading(false);
                });

        // setIsLoading(false);
            // window.sessionStorage.setItem(user, JSON.stringify(recipeDetails));
    }

    return (
        <React.Fragment>
            { recipes && recipes.length ?
                recipes.map((res) =>
                    <NavLink to={{pathname: "/recipes/details/id", search:`${res.id}`}} key={res.id}>
                        <div className={styles.recipeContainer} onClick={() => getDetails(res.id)}>
                            <p>{res.title}</p>
                            <img src={res.image} className={styles.recipeImg} width="350" alt={res.title} />
                            <p>View recipe</p>
                        </div>
                    </NavLink>)
                 : <Spinner/>
            }
            <Modal
                recipeDetails={recipeDetails}
                isModalOpen={isModalOpen}
                isLoading={isLoading}
                handleClose={() => {
                    setIsModalOpen(false);
                    setRecipeDetails({})
                }}
            />
        </React.Fragment>
    );
};

export default RecipeList;