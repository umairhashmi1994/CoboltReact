import React from "react";
import Header from "../../Common/Header";
import Banner from "./Banner";
import Footer from "../../Common/Footer";
import ContainerSecOne from "./ContainerSecOne";
import ContainerSecThree from "./ContainerSecThree";



class Container extends React.Component {


    render() {
      const tableRef = React.createRef();
      return (
        <div>
          <Banner/>
          <ContainerSecOne/>
          <ContainerSecThree/>
        </div>
      );
    }
  }
  export default  Container;