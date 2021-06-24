import React from 'react';
import {MainFeedItem} from '../main-feed-item';

import './main-feed.css';

import moon from './images/moon.jpg';
import flowers from './images/flowers.jpg';
import summer from './images/summer.jpg';

export interface IMainFeedItem {
  image?: string;
  alt?: string;
  title: string;
  content: string;
}
interface IData extends IMainFeedItem {
  id: string;
}

const data: IData[] = [
  {
    id: '12',
    image: moon,
    alt: moon,
    title: 'Todays Headline',
    content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum libero modi veniam officiis quaerat ipsum maxime architecto culpa, sequi unde itaque! Hic assumenda incidunt facilis mollitia laboriosam natus atque adipisci?`
  },
  {
    id: '13',
    image: summer,
    title: 'Video',
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, ipsam unde corrupti`
  },
  {
    id: '14',
    image: flowers,
    alt: flowers,
    title: 'Hello World!',
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur incidunt suscipit modi quasi dolorum iure! Repudiandae iusto.`
  }
]

export const MainFeed = () => {
  return (
    <ul className='ul'>
      {data.map(({id, image, alt, title, content}) => (
        <MainFeedItem key={id} image={image} alt={alt} title={title} content={content} />
      ))}
    </ul>
    
  )
};

