import React from 'react';
// import logo from '../../logo';
import AppHeader from '../app-header/AppHeader';
import MainFeed from '../main-feed/MainFeed';
import SearchPanel from '../search-panel/SearchPanel';

import './App.css';

function App() {
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

export default App;
