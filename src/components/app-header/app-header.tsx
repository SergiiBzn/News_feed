import React, { Component } from 'react';
import { dataHeader, IAppHeaderState } from 'components';
import { IAppHeaderProps } from 'components';

import './app-header.css';

function AppHeaderItem({ icon, name }: IAppHeaderProps) {
  return (
    <li>
      <span className="icons">{icon}</span>
      <span className="names">{name}</span>
    </li>
  );
}

export class AppHeader extends Component<{}, IAppHeaderState> {
  render() {
    return (
      <div className="app-header">
        <h1>NEWS</h1>
        <ul className='list'>
          {dataHeader.map(({ id, icon, name }) => (
            <AppHeaderItem key={id} icon={icon} name={name} />
          ))}
        </ul>
      </div>
    );
  }
}
