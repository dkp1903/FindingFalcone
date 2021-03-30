import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Result.scss';

const Result = (props) => {
  
    return (
        <div className="result">
          <h1>Finding Falcone!</h1>
          <p>Success! Congratulations for finding Falcone. King Shah is mighty pleased.</p>
          <p>Time Taken: {props.count}</p>
          <p>Planet Found: {props.planetName}</p>
          <button onClick={() => window.location.reload()}>Start Again</button>
        </div>
    );
  
}

Result.propTypes = {
  count: PropTypes.number.isRequired,
  planetName: PropTypes.string.isRequired,
}

export default Result