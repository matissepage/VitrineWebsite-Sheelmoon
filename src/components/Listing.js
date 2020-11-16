import React from 'react';
import './Listing.css';
import { BsXDiamondFill } from 'react-icons/bs';
import { IoIosPeople } from 'react-icons/io';
import { IconContext } from 'react-icons/lib';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#000', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <div className='pricing__container'>
            <div className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <IoIosPeople />
                </div>
                <h1>Agence d'influenceur</h1>
                <br/>
                <br/>
                <p>
                  Nous sommes le lien direct entre l'influenceur et 
                  la marque. Nous étudions constament le marché pour trouver 
                  le meilleur arrangement que ça soit pour les marques ou bien pour 
                  les influenceurs
                </p>
              </div>
            </div>
            <div className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h1>Conseiller Marketing</h1>
                <br/>
                <br/>
                <p>Pour vous propulsez le plus haut possible, 
                  Sheelmoon vous donne ses meilleurs astuce pour que votre profil attire le maximum d'audience. 
                  Dans un monde ou 51% de la population est actif sur les réseaux sociaux, il faut savoir se démarquer, 
                  Sheelmoon est la pour ça avec son analyse d'expert dans le marketing d'influence</p>
              </div>
            </div>
            <div className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <AiOutlineFundProjectionScreen />
                </div>
                <h1>Organisateur de projet</h1>
                <br/>
                <p>Vous souhaitez réaliser un projet ?
                Que ça soit shooting photos, projet vidéo, oragnisation d'événement 
                  ou bien jeux concours et plein d'autres, Sheelmoon vous soutient et 
                  vous accompagne
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;