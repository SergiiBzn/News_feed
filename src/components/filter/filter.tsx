import React from 'react';

import './filter.css';


export const Filter = () => {
  return (
    <div className='filter'>
      <h4 className='filterTitle'>Category</h4>
      <span className='categories'>
        <li>Politics</li>
        <li>National</li>
        <li>International</li>
        <li>Business</li>
        <li>Technology</li>
      </span>
    </div>
  )
}

