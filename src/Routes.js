import React from "react";
import { Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

function Routes() {
    return(
        <switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route>
                <Login />
            </Route>
            <Route>
                <Signup />
            </Route>
        </switch>
    );
}

export default Routes;