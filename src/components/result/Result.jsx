import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Result.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Link
} from "react-router-dom";

const Result = (props) => {
    console.log('Prop status: ', props.location.state.status)
    if(props.location.state.status == "success") 
      return (
        
          <div className="result">
            <h1>Found Falcone!</h1>
            <p>You got me the damn Falcone!</p>
            <p>Time Taken: {props.location.state.count}</p>
            <p>Planet Found: {props.location.state.planetName}</p>
            <Link to="/"> Retry
          </Link>
            {/* <button onClick={() => window.location.reload()}>Not satisfied? Try your luck again</button> */}
          </div>  
        
      ); 
    else 
      return (
      
         <div className="result">
          <h1>Not found Falcone!</h1>
          
          <p>Time Taken: {props.location.state.count}</p>
          <Link to="/"> Retry
          {/* <button onClick={() => window.location.reload()}>Retry</button> */}
          </Link>
        </div>
    )
  
}

Result.propTypes = {
  count: PropTypes.number.isRequired,
  planetName: PropTypes.string.isRequired,
}

export default withRouter(Result)