import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import './header.scss'
import { ProductsContext } from '../Shared/ProductsContext';

const Header = () => {

  const [burger_class, setBurgerClass] = useState('burger-bar unclicked');
  const [menu_class, setMenuClass] = useState('menu hidden');
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const navigate = useNavigate();
  const {cartProducts} = useContext(ProductsContext);

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
        <img onClick={()=> navigate('/')} className='logo-img' src='/assets/logo.png' alt='logo' />
      </div>
      <div className='links'>
        <NavLink className='links-link' to='/'> Home </NavLink>
        <NavLink className='links-link' to='/products'> Products </NavLink>
        <NavLink className='links-link' to='/contact'> Contact </NavLink>
        <NavLink className='links-link' to='/about-us'> About Us </NavLink>

        <div className='shop'>
          <img className='shop-user' src='/assets/usuario.png' alt='user' />
          <div className='shop-cart'>
            <img className='shop-cart_img' src='/assets/cart.png' alt='cart' />
            {cartProducts.length > 0 && <div className='amount'>{cartProducts.length}</div>}
          </div>
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
