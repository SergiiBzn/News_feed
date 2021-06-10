import React from 'react';
// import logo from '../../logo';
import { AppHeader } from '../app-header/app-header';
import { MainFeed } from '../main-feed/main-feed';
import { SearchPanel } from '../search-panel/search-panel';
import { Filter } from '../filter/filter';

import './app.css';

export function App() {
  return (
    <div className="app">
      <div className="">
        <AppHeader />
        <SearchPanel />
      </div>
      <MainFeed />
      <Filter />
    </div>
  );
}
