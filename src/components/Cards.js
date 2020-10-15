import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Bienvenue </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/serviceimg.jpg'
              text='Découvrez nos services'
              label='Services'
              path='/services'
            />
            <CardItem
              src='images/contactimg.jpg'
              text='Besoin de nous contacter ?'
              label='Contact'
              path='/contact'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;