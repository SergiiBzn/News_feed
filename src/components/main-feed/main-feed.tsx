import React from 'react';
import { MainFeedItem } from '../main-feed-item';

import moon from './images/moon.jpg';

import './main-feed.css';

export interface IMainFeedItem {
  image?: string;
  title: string;
  content: string;
}
interface IData extends IMainFeedItem {
  id: string;
}

const data: IData[] = [
  {
    id: "5235",
    image: moon,
    title:"Todays Headline",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis, libero. Tenetur deleniti culpa deserunt! Ipsam voluptate
          numquam quam iusto ipsa sunt, iste, deleniti voluptatem molestias
          aliquid voluptatum possimus omnis impedit.`
  },
  {
    id: "2343",
    title: "Video",
    content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ad accusamus sit quis fugit dolore, incidunt non recusandae amet libero et labore iure nihil molestias explicabo? Architecto ducimus voluptas tempora.`
  }
]


export const MainFeed = () => {
  return (
    <ul className='ul'>
      {data.map(({ id, image, title, content }) => (
        <MainFeedItem key={id} image={image} title={title} content={content} />
      ))}
    </ul>
  )
};

