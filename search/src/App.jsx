import React, { useState, useEffect } from 'react';
import './App.css';
import countryData from './components/countryData.json';
import Country from './components/Country';
import Search from './components/Search';

const App = () => {
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);

  const handleSearch = (info) => {
    setSearch(info);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setShowSuggestions(false);
      console.log("Escape");
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []); 

  return (
    <div>
      <Search handleSearch={handleSearch} />

      {showSuggestions && (
        countryData
          .filter((el) => {
            if (search === "") {
              return "";
            } else if (el.name.toLowerCase().includes(search.toLowerCase())) {
              return el;
            }
            return null; 
          })
          .map((el) => (
            <div key={el.id}>
              <Country country={el} />
            </div>
          ))
      )}
    </div>
  );
};

export default App;
