import React, { Component } from 'react';
// import logo from '../../logo';
import AppHeader from '../app-header';
import MainFeed from '../main-feed';
import SearchPanel from '../search-panel';
import Filter from '../filter';

import './app.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className=''>
          <AppHeader />
          <SearchPanel />
        </div>
        <MainFeed />
        <Filter />
      </div>
    );
  }
}
