import React from "react";
import { BrowserRouter, Switch, Route, history} from "react-router-dom";

import Home from './Home';
import AddMeeting from './AddMeeting';

const routes = (
<BrowserRouter history={history}>  
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/add-meeting" exact component={AddMeeting} />
    </Switch>    
</BrowserRouter>
);


export default routes;
