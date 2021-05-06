import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { IconContext } from 'react-icons/lib';

function Cards() {
  return (
    <IconContext.Provider value={{ color: '#000'}}>
      <div className='cards'>
        <h1>Bienvenue</h1>
        <br></br><br/>
        <h1>Tu es influenceur et tu cherches une agence?<br/><br/>Tu cherches à booster ton instagram ou tes réseaux ?<br/><br/>Tu cherches à créer un projet ou bien un évenement?</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/serviceimg.jpg'
                text='Découvrez nos services'
                label='Services'
                path='/service'
              />
              <CardItem
                src='images/contactimg.jpg'
                text='Prenez contact avec nous'
                label='Contact'
                path='/contact'
              />
            </ul>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Cards;