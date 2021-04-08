import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Spinner from '../../../components/Spinner/Spinner';
import RecipeCard from '../RecipeCard/RecipeCard';
import Modal from '../../../components/Modal/Modal';
import { RecipeContext} from '../../../context/RecipeContext';
import * as foodService from '../../../services/foodService';

const RecipeList = ({ recipes, path, name }) => {
    const [recipeDetails, setRecipeDetails] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { savedRecipes, saveHandler, deleteHandler } = useContext(RecipeContext);

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
                        saved: savedRecipes !== null && savedRecipes.length !== undefined  ? savedRecipes.filter(r => r.id === res.id) : [],
                        deleted:savedRecipes !== null && savedRecipes.length !== undefined ? savedRecipes.find(r => r.id !== res.id) : {}
                    })
                    setIsModalOpen(true);
                    setIsLoading(false);
                });

    }

    return (
        <React.Fragment>
            { recipes && recipes.length ?
                recipes.map((res) =>
                    <NavLink to={{pathname: `${path}/details/id`, search:`${res.id}`}} key={res.id}>
                        <RecipeCard
                            onClick={() => getDetails(res.id)}
                            title={res.title}
                            src={res.image}
                        />
                    </NavLink>)
                 : <Spinner/>
            }
            { isLoading
                ? <Spinner/>
                : <Modal
                        saveHandler={saveHandler}
                        deleteHandler={deleteHandler}
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
            }
        </React.Fragment>
    );
};

export default RecipeList;