import { IMainFeedItem } from 'components';
import React from 'react';

import './main-feed-item.css';

interface IMainFeedItemProps extends IMainFeedItem {}

export const MainFeedItem = ({ image, title, content }: IMainFeedItemProps) => {
  return (
    <li className="main-feed-item">
      <h3>{title}</h3>
      {image && <img src={image}  alt="pic" className='moon-img' />}
      <p className="main-feed-item-label">
        {content}
      </p>
    </li>
  );
};
