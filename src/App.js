import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { RecipeProvider } from './context/RecipeContext';
import PrivateRoute from './components/Auth/PrivateRoute';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register/Register';
import RecipePage from './pages/Recipes/RecipePage/RecipePage';
import FoodFacts from './pages/FoodFacts/Foodfacts';
import MyRecipes from './pages/MyRecipes/MyRecipes';
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';

import './App.scss';

class App extends Component {

    render(){
        return (
            <AuthProvider>
                <RecipeProvider>
                    <div className="body">
                        <Header />
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <PrivateRoute path="/recipes" component={RecipePage} />
                            <Route path="/login" component={Login} />
                            <Route path="/register" component={Register} />
                            <PrivateRoute path="/food-facts" component={FoodFacts} />
                            <PrivateRoute path="/saved-recipes" component={MyRecipes} />
                            <Route component={NotFound} />
                        </Switch>
                        <Footer />
                    </div>
                </RecipeProvider>
            </AuthProvider>
        );
    }
};

export default App;
