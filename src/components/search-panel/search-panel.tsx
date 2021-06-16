import React from 'react';
import { BsSearch } from 'react-icons/bs';

import './search-panel.css';

export const SearchPanel = () => {
  return (
    <div>
      <input className='input' type="text" placeholder="Enter search term" />
      <BsSearch className="search" />
    </div>
  );
};
