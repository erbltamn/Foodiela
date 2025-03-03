import React from "react";
import Navbar from "../components/Navbar";
import Nutrition from "../components/Nutrition";
import Ingredients from "../components/Ingredients";

const Recipes = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Nutrition />
      <Ingredients />
    </div>
  );
};

export default Recipes;
