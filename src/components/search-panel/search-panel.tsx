import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import './search-panel.css';

interface ISearchProps {
  onSearch(searchSmt: string): void;
}

export const SearchPanel: React.FC<ISearchProps> = (props) => {
  const [searchSmt, setSearchSmt] = useState<string>('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchSmt(event.target.value)
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onSearch(searchSmt);
      setSearchSmt('');
    }
  }

  return (
    <div>
      <input
        onChange={changeHandler}
        value={searchSmt}
        className="input"
        type="text"
        placeholder="Enter search term"
        onKeyPress={keyPressHandler}
      />
      <BsSearch className="search" />
    </div>
  );
};
