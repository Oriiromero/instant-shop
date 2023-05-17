import React from "react";
import './home.scss';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="top-home">
      <div className="top-home_news">
        <div className="top-home_newin">
          <p className="top-home_newin__drop"> Just dropped </p>
          <h1 className="top-home_newin__title"> Embrace True Serenity</h1>
          <div onClick={()=> navigate('/products')} className="top-home_newin__btn">
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
    </div>
  );
};

export default Home;
