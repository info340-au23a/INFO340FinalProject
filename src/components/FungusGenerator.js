import React, { useState } from 'react';
import fungusData from '../data/fungus.json';

const FungusGenerator = () => {
  const [randomFungus, setRandomFungus] = useState(null);

  const generateRandomFungus = () => {
    const randomIndex = Math.floor(Math.random() * fungusData.length);
    const selectedFungus = fungusData[randomIndex];
    setRandomFungus(selectedFungus);
  };

  return (
    <div>
      <h2>Today's Fungi For You</h2>
      {randomFungus && (
        <div>
          <h3> {randomFungus.fungus_name}</h3>
          <p>{randomFungus.description}</p>
          <p>It is {randomFungus.edible ? 'edible' : 'not edible'}.</p>
          {randomFungus.other_names.length > 0 && (
            <p>Other Names: {randomFungus.other_names.join(', ')}</p>
          )}
          {randomFungus.imgSrc && (
            <img className='random-fungi'
              src={randomFungus.imgSrc}
              alt={`Image of ${randomFungus.fungus_name}`}
            />
          )}
        </div>
      )}

      <button className='generator' onClick={generateRandomFungus}>Click Here To See More Fungus</button>
    </div>
  );
};

export default FungusGenerator;