import React from 'react';
import './SearchBar.css'

function SearchBar(props) {
    return (
        <div>
            <input 
                type="text"
                placeholder="Search your favourite pokemon" 
                onChange={props.searchMethod}
            />
        </div>
    )
}

export default SearchBar;
