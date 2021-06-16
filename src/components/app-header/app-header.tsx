import React from 'react';
import { BsHouseDoor } from 'react-icons/bs';
import { BsFilm } from 'react-icons/bs';
import { BsBarChart } from 'react-icons/bs';
import { BsBag } from 'react-icons/bs';
import { BsCheckBox } from 'react-icons/bs';
import { BsBell } from 'react-icons/bs';

import './app-header.css';

export const AppHeader = () => {
  return (
    <div className="app-header">
      <h1>NEWS</h1>
      <ul className="app-header-ul">
        <li>
          <BsHouseDoor className="home" />
          Home
        </li>
        <li>
          <BsFilm className="video" />
          Video
        </li>
        <li>
          <BsBarChart className='pools' />
          Pools
        </li>
        <li>
          <BsBag className='magazine' />
          Magazine
        </li>
        <li>
          <BsCheckBox className='check' />
        </li>
        <li>
          <BsBell className='bel' />
        </li>
      </ul>
    </div>
  );
};
