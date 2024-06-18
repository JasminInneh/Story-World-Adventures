import React from "react";
import Header from "./Header";
import MainContent from "./MainContent.js";
import Footer from "./Footer";
import Banner from "./Banner"



//create your first component
const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Home;