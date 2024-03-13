import React from 'react';
import { Link } from 'react-router-dom';
import FungusGenerator from './FungusGenerator';  
import Search from './Search';

const Education = () => {
  return (
    <div>
      <FungusGenerator />
      <br/>
      <Search />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Education;