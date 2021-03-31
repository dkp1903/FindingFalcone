import React from 'react';
import Main from './components/Main/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/">
                <Main />
            </Route>
            
        </Switch>
    </Router>
);

export default App;
