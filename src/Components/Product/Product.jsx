import React, { useContext, useEffect, useState } from "react";
import "./product.scss";
import { useNavigate, useParams } from "react-router-dom";
import { ProductsContext } from "../Shared/ProductsContext";

const Product = () => {
  let { id } = useParams();
  const { allProducts, cartProducts, setCartProducts } =
    useContext(ProductsContext);
  const [singleProduct, setSingleProduct] = useState([null]);
  const [productStars, setProductStars] = useState();
  const [productsCount, setProductCount] = useState();
  const [selectedValue, setSelectedValue] = useState("");
  const navigate = useNavigate();

  //Check if the product we need matches with the id in the url
  useEffect(() => {
    allProducts.map((product) => {
      if (id == product.id) {
        //set that product that matches to our variable
        setSingleProduct(product);
        setProductStars(product.rating.rate);
        setProductCount(product.rating.count);
      }
    });
  }, [id]);

  //Calculate the background to print into the stars
  let pixelPercentage = (100 / 5) * productStars;

  //Save the amount selected
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  //adding product to the cart
  const addToCart = () => {
    let addedProduct = {
      title: singleProduct.title,
      price: singleProduct.price,
      amount: selectedValue,
    };

    setCartProducts([...cartProducts, addedProduct]);

    console.log(addedProduct);
  };

  console.log(cartProducts);

  return (
    <div className="product-page">
      <img onClick={()=> navigate('/products')} className='product-page_back' src="/assets/left-arrow.png" alt="back-arrow" />
      <div className="main-product">
        <div className="main-product_img">
          <img src={singleProduct.image} alt={singleProduct.id} />
        </div>
        <div className="main-product_info">
          <h3 className="main-product_info-title">{singleProduct.title}</h3>
          <p className="main-product_info-descr">{singleProduct.description}</p>
          <div className="star-box">
            <p className="star-num"> {productStars} </p>
            <div className="star-box-inner" style={{ width: pixelPercentage }}>
              <img
                className="star-box-star"
                src="/assets/Star_1.png"
                alt="star"
              />
              <img
                className="star-box-star"
                src="/assets/Star_1.png"
                alt="star"
              />
              <img
                className="star-box-star"
                src="/assets/Star_1.png"
                alt="star"
              />
              <img
                className="star-box-star"
                src="/assets/Star_1.png"
                alt="star"
              />
              <img
                className="star-box-star"
                src="/assets/Star_1.png"
                alt="star"
              />
            </div>
            <p className="random"> ({productsCount}) </p>
          </div>
          <p className="main-product_info-price">€ {singleProduct.price}</p>
          <select
            className="main-product_info-amount"
            onChange={handleSelectChange}
          >
            <option className="main-product_info-amount_opt" value="1">
              1
            </option>
            <option className="main-product_info-amount_opt" value="2">
              2
            </option>
            <option className="main-product_info-amount_opt" value="3">
              3
            </option>
            <option className="main-product_info-amount_opt" value="4">
              4
            </option>
          </select>
          <button onClick={addToCart} className="main-product_info-cart">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
