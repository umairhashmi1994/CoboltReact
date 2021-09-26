import React from "react";
import Header from "../../Common/Header";
import Banner from "./Banner"
import Footer from "../../Common/Footer";
import ProductSecOne from "./ProductSecOne"
import ProductSecFour from "./ProductSecFour"
import ProductSecThree from "./ProductSecThree";
import ProductSectwo from "./ProductSectwo";




class Products extends React.Component {
    render() {
      const tableRef = React.createRef();
      return (
        <div>
          <Banner/>
          <ProductSecOne/>
          <ProductSectwo/>
          <ProductSecThree/>
          <ProductSecFour/>
        </div>
      );
    }
  }
  export default Products;