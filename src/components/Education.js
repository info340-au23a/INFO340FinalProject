import React from 'react';
import { Link } from 'react-router-dom';
import FungusGenerator from './FungusGenerator';  // Import FungusGenerator component

const Education = () => {

  return (
    <div>
      <h2>Education</h2>
      <FungusGenerator />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Education;