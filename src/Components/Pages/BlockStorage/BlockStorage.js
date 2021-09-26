import React from "react";
import Header from "../../Common/Header";
import Banner from "./Banner"
import Footer from "../../Common/Footer";
import Crafted from "./Crafted";
// import ScaleBussiness from "../ObjectStorage/ScaleBussiness";
import ScalableData from "./ScalableData";
import BSectionTwo from "./BSectionTwo";

class BlockStorage extends React.Component {
  render() {
    const tableRef = React.createRef();
    return (
      <div>
        <Banner/>
        <Crafted/>
        <ScalableData/>
        <BSectionTwo/>
      </div>
    );
  }
}
export default  BlockStorage;
