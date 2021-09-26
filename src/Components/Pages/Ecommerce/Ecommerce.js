import React from "react";
import Header from "../../Common/Header";
import Banner from "./Banner"
import Footer from "../../Common/Footer";
import EcommerceSecOne from "./EcommerceSecOne";
import EcommerceSecTwo from "./EcommerceSecTwo";
import EcommerceTool from './EcommerceTool'


class Ecommerce extends React.Component {
    render() {
      const tableRef = React.createRef();
      return (
        <div>
          <Banner/>
          <EcommerceSecOne/>
          <EcommerceSecTwo/>
          <EcommerceTool/>
        </div>
      );
    }
  }
  export default  Ecommerce;