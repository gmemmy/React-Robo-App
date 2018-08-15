import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
    return(
      <div className="search-style">

        <input 
        className="form"
        type="search" 
        placeholder="search robots"
        onChange={searchChange  } />

      </div>
    );
}

export default SearchBox;