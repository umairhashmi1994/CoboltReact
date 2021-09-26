import React from "react";
import { Link } from "react-router-dom";
import Header from "../Common/Header";
import Feature from "../Pages/Feature"
import BuildWith from "../Pages/BuildWith"
import Usecase from "./Usecase";
import SeeWho from "./SeeWho";
import Resource from "./Resource";
import Banner from "./Banner"
import Line from "./Line"
import Footer from "../Common/Footer";

class Home extends React.Component {
  render() {
    return (
      <div>        
        <Banner/>
        <Feature/>
        <BuildWith/>
        <Usecase/>
        <SeeWho/>
        <Resource/>
        <Line/>        
      </div>
    );
  }
}
export default Home;
