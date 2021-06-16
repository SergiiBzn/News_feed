import React from 'react';
// import logo from '../../logo';
import { AppHeader } from '../app-header';
import { MainFeed } from '../main-feed';
import { SearchPanel } from '../search-panel';
import { Filter } from '../filter';

import './app.css';

export const App = () => {
  return (
    <div className="app">
      <div className="app-header search-panel">
        <AppHeader />
        <SearchPanel />
      </div>
      <div className="main-text">
        <Filter />
        <MainFeed />
      </div>
    </div>
  );
};
