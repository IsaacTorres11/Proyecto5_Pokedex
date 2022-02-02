import React from 'react';
import { Link } from 'react-router-dom';

const Result = ({pokemon}) => {
    
  return (
      <>
      <p>Este es tu pokemon: <Link to={`/pokedex/${pokemon}`}>{pokemon}</Link></p>
      </>
  )
};

export default Result;
