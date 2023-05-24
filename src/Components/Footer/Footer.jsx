import React from 'react';
import footer from './footer.scss';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <section className='footer-container_socials'>
          <h4 className='li-title'> Socials </h4>
          <ul className='ulist'>
            <li className='ulist-item'>
              Twitter
            </li>
            <li className='ulist-item'>
              Instagram
            </li>
            <li className='ulist-item'>
              Facebook
            </li>
          </ul>
        </section>
        <section className='footer-container_info'>
          <h4 className='li-title'> Information </h4>
          <ul className='ulist'>
            <li className='ulist-item'><NavLink to='/about-us'>About us</NavLink></li>
            <li className='ulist-item'><NavLink to='/contact'>Contact</NavLink></li>
            <li className='ulist-item'>Work with us</li>
          </ul>
        </section>
        <section className='footer-container_pay'>
        <h4 className='li-title'> Payment methods </h4>
          <ul className='ulist'>
            <li className='ulist-item'><img src='/assets/apple-pay.png' alt='apple'/></li>
            <li className='ulist-item'><img src='/assets/visa.png' alt='visa'/></li>
            <li className='ulist-item'><img src='/assets/shopping.png' alt='mastercard'/></li>
            <li className='ulist-item'><img src='/assets/paypal.png' alt='paypal'/></li>
          </ul>
        </section>
      </div>
      <p className='footer-copy'>© InstantShop 2023</p>
    </footer>
  )
}

export default Footer
