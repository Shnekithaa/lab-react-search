import React, { useState } from 'react';

const Search = ({ handleSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={() => console.log('Search button clicked')}>Search</button>
    </div>
  );
};

export default Search;
