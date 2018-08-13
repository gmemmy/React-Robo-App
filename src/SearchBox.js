import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
    return(
      <div className="">

        <input 
        type="search" 
        placeholder="search robots"
        onChange={searchChange} />

      </div>
    );
}

export default SearchBox;