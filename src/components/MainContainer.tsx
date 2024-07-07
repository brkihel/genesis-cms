"use client";

import LogoImage from "../images/genesis-logo.png";
import Footer from "./Footer";
import React, { ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = (props) => {
  return (
    <section className="main-container">
      <div className="header-section">
        <div className="overlay" />
        <div className="container mx-auto sm:px-4">
          <div className="logo">
            <img src={LogoImage.src} alt="" />
          </div>
          {props.children}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default MainContainer;
