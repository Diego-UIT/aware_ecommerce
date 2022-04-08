import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Categories />
      <Footer/>
    </div>
  );
};

export default Home;
