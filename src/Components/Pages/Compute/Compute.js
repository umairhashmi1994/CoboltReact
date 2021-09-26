import React from "react";
import Header from "../../Common/Header";
import Banner from "./Banner"
import Footer from "../../Common/Footer";
import ComputeSecOne from "./ComputeSecOne";
import ComputeSlider from "./ComputeSlider";
import ComputeSecThree from "./ComputeSecThree";
import ComputeSecFour from "./ComputeSecFour";


class Compute extends React.Component {
    render() {
      const tableRef = React.createRef();
      return (
        <div>
          <Banner/>
          <ComputeSecOne/>
          <ComputeSlider/>
          <ComputeSecThree/>
          <ComputeSecFour/>
        </div>
      );
    }
  }
  export default  Compute;