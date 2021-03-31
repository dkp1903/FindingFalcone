import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Result.scss';

const Result = (props) => {
    console.log('Prop status: ', props.status)
    if(props.status == "success") 
      return (
        
          <div className="result">
            <h1>Found Falcone!</h1>
            <p>You got me the damn Falcone!</p>
            <p>Time Taken: {props.count}</p>
            <p>Planet Found: {props.planetName}</p>
            <button onClick={() => window.location.reload()}>Not satisfied? Try your luck again</button>
          </div>  
        
      ); 
    else 
      return (
      
         <div className="result">
          <h1>Not found Falcone!</h1>
          
          <p>Time Taken: {props.count}</p>
          
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
    )
  
}

Result.propTypes = {
  count: PropTypes.number.isRequired,
  planetName: PropTypes.string.isRequired,
}

export default Result