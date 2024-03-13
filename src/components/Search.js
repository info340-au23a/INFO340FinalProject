import React, { useState } from 'react';
import fungusData from '../data/fungus.json';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const searchFungus = () => {
    const lowercaseSearchTerm = searchTerm.toLowerCase();
    const foundFungus = fungusData.find(
      (fungus) => fungus.fungus_name.toLowerCase() === lowercaseSearchTerm
    );

    if (foundFungus) {
      setSearchResult(foundFungus);
    } else {
      setSearchResult(null);
      alert(`Fungus with the name "${searchTerm}" not found.`);
    }
  };

  return (
    <div>
      <h2>Fungus Search</h2>
      <input
        className='search-bar'
        type="text"
        placeholder="Enter Fungus Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className='search' onClick={searchFungus}>Search</button>

      {searchResult && (
        <div>
          <h3>{searchResult.fungus_name}</h3>
          <p>{searchResult.description}</p>
          <p>It is {searchResult.edible ? 'edible' : 'not edible'}</p>
          {searchResult.other_names.length > 0 && (
            <p>Other Names: {searchResult.other_names.join(', ')}</p>
          )}
          {searchResult.imgSrc && (
            <img className='random-fungi'
              src={searchResult.imgSrc}
              alt={`Image of ${searchResult.fungus_name}`}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Search;