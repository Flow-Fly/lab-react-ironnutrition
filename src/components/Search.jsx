import React from 'react';

const Search = ({handleChange}) => {
  return (
    <input
      type="search"
      name="search"
      placeholder="Search me !"
      className="input column is-6 is-offset-3"
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export default Search;
