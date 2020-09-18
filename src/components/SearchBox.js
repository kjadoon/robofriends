import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className="tc pa2">
           Search <input 
           type="search" 
           placeholder='Search robots' 
           className="pa3 ba b--pink bg-lightest-blue"
           onChange={searchChange}
           />
        </div>
    )
}

export default SearchBox;