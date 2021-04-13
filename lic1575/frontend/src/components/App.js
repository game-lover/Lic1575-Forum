import React, {Component} from 'react';
import {Redirect, Route, Switch, BrowserRouter} from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage.js';
import HomePage from '../pages/HomePage.js';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/*' component={NotFoundPage} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
