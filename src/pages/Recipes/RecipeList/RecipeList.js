import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Spinner from '../../../components/Spinner/Spinner';
import Modal from '../../../components/Modal/Modal';
import * as foodService from '../../../services/foodService';

import styles from './RecipeList.module.scss';


const RecipeList = ({ recipes }) => {
    const [recipeDetails, setRecipeDetails] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);

    const getDetail = (value) => {
        // if(!isLoading) {
        //     setIsLoading(true);
            foodService.getRecipeDetail(value)
                .then(res =>
                    setRecipeDetails({steps: res.analyzedInstructions[0].steps, title: res.title, image: res.image, readyInMinutes: res.readyInMinutes}));
            setIsModalOpen(true);
        // }
        // setIsLoading(false);
    }

    return (
        <React.Fragment>
            { recipes && recipes.length ?
                recipes.map((res) =>
                    <NavLink to={{pathname: "/recipes/details/id", search:`${res.id}`}} key={res.id}>
                        <div className={styles.recipeContainer}>
                            <p>{res.title}</p>
                            <img src={res.image} className={styles.recipeImg} width="350" alt={res.title} />
                            <p onClick={() => getDetail(res.id)}>View recipe</p>
                        </div>
                    </NavLink>)
                : <Spinner/>
            }
            <Modal recipeDetails={recipeDetails} isModalOpen={isModalOpen} />
        </React.Fragment>
    );
};

export default RecipeList;