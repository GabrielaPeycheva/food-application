import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register/Register';
import RecipePage from './pages/Recipes/RecipePage/RecipePage';
import FoodFacts from './pages/FoodFacts/Foodfacts';
import MyRecipes from './pages/MyRecipes/MyRecipes';
import Footer from './components/Footer/Footer';
import { AuthProvider } from './components/Auth/Auth';
import PrivateRoute from './components/Auth/PrivateRoute';

import './App.scss';

class App extends Component {

    render(){
        return (
            <AuthProvider>
                <div className="body">
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <PrivateRoute path="/recipes" component={RecipePage} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <PrivateRoute path="/food-facts" component={FoodFacts} />
                        <PrivateRoute path="/saved-recipes" component={MyRecipes} />
                        <Route render={() => <h1> ERROR 404</h1>} />
                    </Switch>
                    <Footer />
                </div>
            </AuthProvider>
        );
    }
};

export default App;
