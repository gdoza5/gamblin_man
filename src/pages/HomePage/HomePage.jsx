import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import HomePageLander from "../../components/HomePageLander/HomePageLander";
// import "./HomePage.css";

const HomePage = props => {
  return (
    <div className="HomePage">
      <NavBar user={props.user} handlelogout={props.handlelogout} />
      <HomePageLander />
    </div>
  );
};

export default HomePage;