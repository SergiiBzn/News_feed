import React from 'react';
import { IMainFeedItem } from 'components';

import './main-feed-item.css';

interface IMainFeedItemProps extends IMainFeedItem {}

export const MainFeedItem = ({image, alt, title, content}: IMainFeedItemProps) => {
  return (
    <li className="main-feed-item">
      <h3>{title}</h3>
      {image && <img src={image} alt={alt} className="moon-img" /> }
      <p className="main-feed-item-label">{content}</p>
    </li>
  );
};
