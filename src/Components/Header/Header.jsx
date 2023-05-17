import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './header.scss'

const Header = () => {

  const [burger_class, setBurgerClass] = useState('burger-bar unclicked');
  const [menu_class, setMenuClass] = useState('menu hidden');
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if(!isMenuClicked){
      setBurgerClass('burger-bar clicked');
      setMenuClass('menu visible');
    }
    else {
      setBurgerClass('burger-bar unclicked');
      setMenuClass('menu hidden')
    }
    setIsMenuClicked(!isMenuClicked);
  }


  return (
    <header className='header'>
      <div className='logo'>
        <img className='logo-img' src='/assets/logo.png' alt='logo' />
      </div>
      <div className='links'>
        <NavLink className='links-link' to='/'> Home </NavLink>
        <NavLink className='links-link' to='/products'> Products </NavLink>
        <NavLink className='links-link' to='/contact'> Contact </NavLink>
        <NavLink className='links-link' to='/about-us'> About Us </NavLink>

        <div className='shop'>
          <img className='shop-user' src='/assets/usuario.png' alt='user' />
          <img className='shop-cart' src='/assets/cart.png' alt='cart' />
        </div> 
        <div className='burger-menu' onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </div>
     
      <div className={menu_class}>
        <div className='burger-links'>
          <NavLink onClick={updateMenu} className='burger-link' to='/'> Home </NavLink>
          <NavLink onClick={updateMenu} className='burger-link' to='/products'> Products </NavLink>
          <NavLink onClick={updateMenu} className='burger-link' to='/contact'> Contact </NavLink>
          <NavLink onClick={updateMenu} className='burger-link' to='/about-us'> About Us </NavLink>
        </div>
    
      </div>
    </header>
  )
}

export default Header
