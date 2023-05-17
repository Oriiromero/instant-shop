import React, { useEffect, useState } from "react";
import "./home.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      if (res.status === 200) {
        const shuffledProducts = shuffleArray(res.data);
        const randomProducts = shuffledProducts.slice(0, 4);
        setProducts(randomProducts);
      }
    });
  }, []);

  console.log(products);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <div className="top-home">
      <div className="top-home_news">
        <div className="top-home_newin">
          <p className="top-home_newin__drop"> Just dropped </p>
          <h1 className="top-home_newin__title"> Embrace True Serenity</h1>
          <div
            onClick={() => navigate("/products")}
            className="top-home_newin__btn"
          >
            Shop now
            <img
              className="top-home_newin__img"
              src="/assets/next.png"
              alt="arrow"
            />
          </div>
        </div>
        <div className="top-home_model">
          <div className="circle-big"></div>
          <div className="circle-medium"></div>
          <div className="circle-little"></div>
          <div className="circle-empty"></div>
          <img src="/assets/man.png" alt="model" />
        </div>
      </div>
      <div className="top-home_introduction">
        <h3 className="top-home_introduction__title"> What we do </h3>
        <p className="top-home_introduction__p">
          {" "}
          At InstantShop, we curate a diverse selection of high-quality
          products, making online shopping simple and enjoyable. Our focus is on
          delivering outstanding service and ensuring the authenticity and
          quality of every item. With secure and convenient payment options,
          fast and reliable shipping, and a commitment to staying up-to-date
          with the latest trends, InstantShop is your go-to destination for
          effortless and satisfying shopping. Experience the difference today
          and discover the joy of InstantShop.
        </p>
        <div
          onClick={() => navigate("/about-us")}
          className="top-home_introduction__btn"
        >
          Learn More
          <img
            className="top-home_introduction__img"
            src="/assets/next.png"
            alt="arrow"
          />
        </div>
      </div>
      <div className="top-home_gal">
        <h2 className="top-home_gal__title"> Most popular </h2>
        {products.map((product, index) => {
          return (
            <div
              key={index}
              className="top-home_gal__box"
              onClick={() => navigate(`/products/${product.id}`)}
            >
              <div className="top-home_gal__box-img">
                <img src={product.image} alt={product.id} />
              </div>
              <h5 className="top-home_gal__box-title">{product.title}</h5>
              <p className="top-home_gal__box-price">€ {product.price}</p>
            </div>
          );
        })}
        <div
          onClick={() => navigate('/products')}
          className="top-home_gal__box-btn"
        >
          See more
          <img
            className="top-home_gal__box-img"
            src="/assets/next.png"
            alt="arrow"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
