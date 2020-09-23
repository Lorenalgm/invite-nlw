import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Invite from './pages/Invite';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Invite} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;