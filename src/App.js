import React from 'react';
import Main from './components/Main/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Result from './components/result/Result.jsx'
const App = (props) => (
    <Router>
        <Switch>
            <Route exact path="/">
                <Main />
            </Route>
            <Route exact path="/result">
                <Result location={props.location} />
            </Route>
            
        </Switch>
    </Router>
);

export default App;
