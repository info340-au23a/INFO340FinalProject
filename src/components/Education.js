import React from 'react';
import { Link } from 'react-router-dom'; 

const Education = () => {
  return (
    <div>
      <Link to="/community">
          <button>Community</button></Link>
      <h2>Education</h2>
    </div>
  );
};

export default Education;