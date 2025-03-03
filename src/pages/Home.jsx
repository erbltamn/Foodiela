import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Choice from "../components/Choice";
import Kitchen from "../components/Kitchen";
import Instagram from "../components/Instagram";
import Options from "../components/Options";
import Inbox from "../components/Inbox";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Slider />
      <Categories />
      <Choice />
      <Kitchen />
      <Instagram />
      <Options />
      <Inbox />
      <Footer />
    </div>
  );
};

export default Home;
