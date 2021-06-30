import React from 'react';
import { AppHeader } from '../app-header';
import { MainFeed } from '../main-feed';
import { SearchPanel } from '../search-panel';
import { Filter } from '../filter';
import { BsBag, BsBarChart, BsBell, BsCheckBox, BsHouseDoor } from 'react-icons/bs';
import { BsFilm } from 'react-icons/bs';

import './app.css';

export interface IAppHeaderState {
  colored: string
}

export interface IAppHeaderProps {
  id?: string,
  icon: any,
  name?: string
}


 export const dataHeader: IAppHeaderProps[] = [
  {
    id: '3',
    icon: <BsHouseDoor className="home" />,
    name: 'Home'
  },
  {
    id: '4',
    icon: <BsFilm className="video" />,
    name: 'Video'
  },
  {
    id: '5',
    icon: <BsBarChart className="pools" />,
    name: 'Pools'
  },
  {
    id: '6',
    icon: <BsBag className="magazine" />,
    name: 'Magazine'
  },
  {
    id: '7',
    icon: <BsCheckBox className="check" />
  },
  {
    id: '8',
    icon: <BsBell className="bel" />
  }
]

export interface IFilterProps {
  id?: string,
  name?: string
}

export const dataFilter: IFilterProps[] = [
  {
    id: '10',
    name: 'Politics'
  },
  {
    id: '11',
    name: 'National'
  },
  {
    id: '12',
    name: 'International'
  },
  {
    id: '13',
    name: 'Health'
  },
  {
    id: '14',
    name: 'Business'
  },
  {
    id: '15',
    name: 'Technology'
  },
  {
    id: '16',
    name: 'Jobs'
  },
  {
    id: '17',
    name: 'Media'
  }
]

export const App: React.FC = () => {
  // const [search, setSearch] = useState([]);

  const searchHandler = (searchSmt: string) => {
    console.log('Find something', searchSmt);
    
  }

  return (
    <div className="app">
      <div className="app-header search-panel">
        <AppHeader />
        <SearchPanel onSearch={searchHandler}  />
      </div>
      <div className="main-text">
        <Filter />
        <MainFeed />
      </div>
    </div>
  );
};
