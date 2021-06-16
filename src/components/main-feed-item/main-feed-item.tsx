import React from 'react';
import moon from './images/moon.jpg';

import './main-feed-item.css';

export const MainFeedItem = () => {
  return (
    <div>
      <li className="main-feed-item">
        <h3>Todays Headline</h3>
        <img src={moon}  alt="pic" className='moon-img' />
        <p className="main-feed-item-label">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis, libero. Tenetur deleniti culpa deserunt! Ipsam voluptate
          numquam quam iusto ipsa sunt, iste, deleniti voluptatem molestias
          aliquid voluptatum possimus omnis impedit.
        </p>
      </li>
      <li className='main-feed-item'>
        <h3>Video</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ad accusamus sit quis fugit dolore, incidunt non recusandae amet libero et labore iure nihil molestias explicabo? Architecto ducimus voluptas tempora.</p>
      </li>
    </div>
  );
};
