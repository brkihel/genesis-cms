"use client";

import React from "react";
import newsImage from "../../images/news-img.webp";
import separatorNews from "../../images/separator.png";

interface HomeSessionProps {
  setPage: (page: string) => void;
}

const HomeSession: React.FC<HomeSessionProps> = ({ setPage }) => {
  return (
    <>
      <div className="homeRegisterContent">
        <h2>
          Novo por aqui?{" "}
          <a onClick={() => setPage("register")} href="#">
            Registre-se
          </a>
        </h2>
      </div>
      <div className="home-news-container">
        <div className="flex flex-wrap ">
          <div className="md:w-1/3 pr-4 pl-4 home-news-img">
            <img className="news-image" src={newsImage.src} alt=""></img>
            <h2>
              <a href="#">Saiba mais...</a>
            </h2>
          </div>
          <div className="md:w-2/3 pr-4 pl-4 home-news-content">
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              arcu nunc, ullamcorper ut luctus ac, vehicula non eros. Praesent
              faucibus massa mi, nec rhoncus dolor malesuada id. Vestibulum
              pretium a odio in tincidunt. Sed id scelerisque neque. Suspendisse
              potenti. Nam pretium nunc quis mi tempus, vel vulputate justo
              sodales. Quisque volutpat dui quis magna consectetur iaculis.
            </p>
          </div>
          <div>
            <img
              className="separator-news"
              src={separatorNews.src}
              alt=""
            ></img>
          </div>
        </div>
      </div>
      <div className="home-news-container">
        <div className="flex flex-wrap ">
          <div className="md:w-1/3 pr-4 pl-4 home-news-img">
            <img className="news-image" src={newsImage.src} alt=""></img>
            <h2>
              <a href="#">Saiba mais...</a>
            </h2>
          </div>
          <div className="md:w-2/3 pr-4 pl-4 home-news-content">
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              arcu nunc, ullamcorper ut luctus ac, vehicula non eros. Praesent
              faucibus massa mi, nec rhoncus dolor malesuada id. Vestibulum
              pretium a odio in tincidunt. Sed id scelerisque neque. Suspendisse
              potenti. Nam pretium nunc quis mi tempus, vel vulputate justo
              sodales. Quisque volutpat dui quis magna consectetur iaculis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSession;
