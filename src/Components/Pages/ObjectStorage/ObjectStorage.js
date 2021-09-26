import React from "react";
import Header from "../../Common/Header";
import Banner from "./Banner"
import Footer from "../../Common/Footer";
import Price from "./Price";
import ScaleBussiness from "./ScaleBussiness";
import Line from "../Line";
import Possibilities from "./Possibilities";

class ObjectStorage extends React.Component {
  render() {
    return (
      <div>
        <Banner/>
        <Price/>
        <ScaleBussiness/>
        <Possibilities/>
      </div>
    );
  }
}
export default  ObjectStorage;
