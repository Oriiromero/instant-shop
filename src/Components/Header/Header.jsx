import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./header.scss";
import { ProductsContext } from "../Shared/ProductsContext";

const Header = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const navigate = useNavigate();
  const { cartProducts, openCart, setOpenCart } = useContext(ProductsContext);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    sumPrices();
  }, [cartProducts]);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const sumPrices = () => {
    let prices = [];
    let result = 0;
    let total = 0;

    for (let i = 0; i < cartProducts.length; i++) {
      result = cartProducts[i].price * cartProducts[i].amount;
      prices.push(result);
    }

    for (let i = 0; i < prices.length; i++) {
      total += prices[i];
    }

    setTotalSum(total);
  };

  return (
    <header className="header">
      <div className="logo">
        <img
          onClick={() => navigate("/")}
          className="logo-img"
          src="/assets/logo.png"
          alt="logo"
        />
      </div>
      <div className="links">
        <NavLink className="links-link" to="/">
          {" "}
          Home{" "}
        </NavLink>
        <NavLink className="links-link" to="/products">
          {" "}
          Products{" "}
        </NavLink>
        <NavLink className="links-link" to="/contact">
          {" "}
          Contact{" "}
        </NavLink>
        <NavLink className="links-link" to="/about-us">
          {" "}
          About Us{" "}
        </NavLink>

        <div className="shop">
          <img className="shop-user" src="/assets/usuario.png" alt="user" />
          <div className="shop-cart">
            <img
              onClick={() => setOpenCart(!openCart)}
              className="shop-cart_img"
              src="/assets/cart.png"
              alt="cart"
            />
            {cartProducts.length > 0 && (
              <div className="amount">{cartProducts.length}</div>
            )}
          </div>
        </div>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </div>

      <div className={menu_class}>
        <div className="burger-links">
          <NavLink onClick={updateMenu} className="burger-link" to="/">
            {" "}
            Home{" "}
          </NavLink>
          <NavLink onClick={updateMenu} className="burger-link" to="/products">
            {" "}
            Products{" "}
          </NavLink>
          <NavLink onClick={updateMenu} className="burger-link" to="/contact">
            {" "}
            Contact{" "}
          </NavLink>
          <NavLink onClick={updateMenu} className="burger-link" to="/about-us">
            {" "}
            About Us{" "}
          </NavLink>
        </div>
      </div>
      {openCart === true && cartProducts.length > 0 && (
        <div className="cart-modal">
          {cartProducts.map((product, index) => (
            <div className="cart-modal_product" key={index}>
              <div className="cart-modal_product-up">
                <p className="cart-modal_product-up__title"> {product.title} </p>
                <p className="cart-modal_product-up__amount">
                  {" "}
                  Amount: <strong>{product.amount}</strong>
                </p>
              </div>
              <div className="cart-modal_product-info">
                <p className="cart-modal_product-info__price">
                  € {product.price}
                </p>
              </div>
            </div>
          ))}
          <p className="cart-modal_product__total"> Total: € {totalSum}</p>
          <button className="cart-modal_product__btn"> Buy </button>
          <div className="triangle"></div>
        </div>
      )}
    </header>
  );
};

export default Header;
