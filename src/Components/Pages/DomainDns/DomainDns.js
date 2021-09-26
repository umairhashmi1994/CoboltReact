import React from "react";
import Header from "../../Common/Header";
import Banner from "./Banner";
import Footer from "../../Common/Footer";
import DomainSecOne from "./DomainSecOne";
import DomainSlider from "./DomainSlider"


class Domain extends React.Component {
    render() {
      const tableRef = React.createRef();
      return (
        <div>
          <Banner/>
          <DomainSecOne/>
          <DomainSlider/>
        </div>
      );
    }
  }
  export default  Domain;