import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import RecipePage from './pages/Recipes/RecipePage/RecipePage';
import Footer from './components/Footer/Footer';

import './App.scss';

function App() {

    return (
        <div className="body">
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/recipes" component={RecipePage} />
                <Route render={() => <h1> ERROR 404</h1>} />
            </Switch>
            <Footer />
        </div>
    );
};

export default App;
