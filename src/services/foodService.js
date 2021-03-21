const baseURL = 'https://api.spoonacular.com';
// const apiKey = 'apiKey=0e7599f2c2324d489cf205f88c531e46';
const apiKey = 'apiKey=f6913744ab9f48cda36b82c4abd2b589';

export const getTrivialFact = () => {
    return fetch(baseURL + '/food/trivia/random' + '?' + apiKey)
        .then(res => res.json())
        .catch(error => console.log(error));
};

export const getRandomRecipes = () => {
    return fetch(baseURL + '/recipes/random?number=10&tags=vegetarian,dessert' + '&' + apiKey)
        .then(res => res.json())
        .catch(error => console.log(error));
};

// export const getSurchedRecipes = (value) => {
//         return fetch(baseURL + '/recipes/complexSearch'+ '&' + apiKey)
//             .then(res => res.json())
//             .catch(error => console.log(error));
// };
