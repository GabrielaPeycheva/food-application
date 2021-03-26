import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register/Register';
import RecipePage from './pages/Recipes/RecipePage/RecipePage';
import Footer from './components/Footer/Footer';

import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        return (
            <div className="body">
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/recipes" component={RecipePage} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route render={() => <h1> ERROR 404</h1>} />
                </Switch>
                <Footer />
            </div>
        );
    }
};

export default App;
