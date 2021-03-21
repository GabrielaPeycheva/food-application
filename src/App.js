import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import RecipePage from './pages/Recipes/RecipePage/RecipePage';
import * as foodService from './services/foodService';

import './App.scss';


const App = (props) => {

  const [trivialFact, setTrivialFact] = useState({});
  // const [recipes, setRecipes] = useState([]);

  useEffect( () => {
    foodService.getTrivialFact()
    .then(res => setTrivialFact(res))
  }, [])

  // useEffect(() => {
  //   foodService.getRandomRecipes()
  //     .then(res => setRecipes({recipes: res.recipes}))
  // }, [])

  return (
    <React.Fragment>
      <div className="body">
        <Header />
        <Home {...trivialFact} />
        <RecipePage />
      </div>
    </React.Fragment>
  );
}

export default App;
