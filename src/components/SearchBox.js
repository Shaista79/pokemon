import React from 'react';
export const SearchBox = ({placeholder, handleChange}) =>(
    <div className="container">
    <h4 className='Auther'><a href="https://shaista79.github.io/resume/" target="_blank" rel="noreferrer">Author</a></h4>
       <h1 className='heading'>Pokemon</h1>
    <input 
        className='search'
        type='search' 
        placeholder={placeholder} 
        onChange={handleChange}
    />
    </div>
);

