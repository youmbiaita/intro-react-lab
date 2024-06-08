// src/components/SearchBar.js
import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input id='search' type="text" placeholder="Search employees..." />
    </div>
  );
};

export default SearchBar;
