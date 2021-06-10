import React from 'react';
// import logo from '../../logo';
import { AppHeader } from '../app-header';
import { MainFeed } from '../main-feed';
import { SearchPanel } from '../search-panel';

import './App.css';

export function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="search-panel d-flex">
        <MainFeed />
        <SearchPanel />
      </div>
    </div>
  );
}
