const baseURL = 'https://api.spoonacular.com';
// const apiKey = 'apiKey=0e7599f2c2324d489cf205f88c531e46';
// const apiKey = 'apiKey=f6913744ab9f48cda36b82c4abd2b589';
// const apiKey = 'apiKey=ae13a678382241a895eed801f1413a69';
// const apiKey = 'apiKey=5312cd0bf1364828aa893ccf4744b865';
const apiKey = 'apiKey=482931f30dbf46a4a7f1ed21fc08f782';

export const IMAGE_URL = 'https://spoonacular.com/cdn/ingredients_100x100/';

export const getTrivialFact = () => {
    return fetch(`${baseURL}/food/trivia/random?${apiKey}`)
        .then(res => res.json())
        .catch(error => console.log(error));
};

export const getRandomRecipes = () => {
    return fetch(`${baseURL}/recipes/random?number=40&tags=salad&${apiKey}`)
        .then(res => res.json())
        .catch(error => console.log(error));
};

export const getSearchedRecipes = (value) => {
        return fetch(`${baseURL}/recipes/complexSearch?query=${value}&number=120&${apiKey}`)
            .then(res => res.json())
            .catch(error => console.log(error));
};

export const getRecipeDetail = (value) => {
    return fetch(`${baseURL}/recipes/${value}/information?${apiKey}`)
        .then(res => res.json())
        .catch(error => console.log(error));
};

