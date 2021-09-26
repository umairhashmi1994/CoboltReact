import React from "react";
import Header from "../../Common/Header";
import Banner from "./Banner"
import Footer from "../../Common/Footer";
import MobileSecOne from "./MobileSecOne";
import MobileApplication from "./MobileApplication";
import MobileSecFour from "./MobileSecFour";


class Mobile extends React.Component {
    render() {
      const tableRef = React.createRef();
      return (
        <div>
          <Banner/>
          <MobileSecOne/>
          <MobileApplication/>
          <MobileSecFour/>
        </div>
      );
    }
  }
  export default  Mobile;