import React from 'react';
import './ContactListing.css';
import { IconContext } from 'react-icons/lib';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { ImMail4 } from 'react-icons/im';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#000', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <div className='pricing__container'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                <a href="https://www.instagram.com/sheelmoon.officiel/?hl=fr" target="_blank" rel="noopener noreferrer">
                  <AiFillInstagram />
                </a>
                </div>
                <h1>Instagram</h1>
                <p>sheelmoon.officiel</p>
            </div>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <a href="https://www.facebook.com/sheelmoon.officiel/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                  </a>
                </div>
                <h1>Facebook</h1> 
                <p>sheelmoon.officiel</p>
                <br/>
                <br/>
              </div>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <ImMail4 />
                </div>
                <h1>Mail</h1>
                <p>contact@sheelmoon.com</p>
                <br/>
              </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;