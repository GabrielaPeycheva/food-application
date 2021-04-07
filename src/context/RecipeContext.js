import React, { useContext, useEffect, useState} from 'react';
import Spinner from '../components/Spinner/Spinner';
import { AuthContext } from './AuthContext';

export const RecipeContext = React.createContext();

export const RecipeProvider = ({ children }) => {
    const { currentUser } = useContext(AuthContext);
    const [savedRecipes, setSavedRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const saveHandler = (recipe) => {
        let storage = [...savedRecipes, recipe];
        setSavedRecipes(storage);
        window.sessionStorage.setItem(currentUser.email, JSON.stringify(storage));
    }

    const deleteHandler = (id) => {
        let updatedRecipes = savedRecipes.filter( a => a.id !== id);
        setSavedRecipes(updatedRecipes);
        window.sessionStorage.setItem(currentUser.email, JSON.stringify(updatedRecipes));
    }

    useEffect(() => {
        if (currentUser && currentUser.email) {
            setSavedRecipes(JSON.parse(sessionStorage.getItem(currentUser.email)) || []);
        }
        setIsLoading(false);
    }, [currentUser && currentUser.email]);

    if (isLoading) {
        return <Spinner/>
    }

    return (
        <RecipeContext.Provider value={{savedRecipes,saveHandler,deleteHandler}}>
            {children}
        </RecipeContext.Provider>
    );
};