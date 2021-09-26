import React from "react";
import Header from "../../Common/Header";
import Banner from "./Banner"
import Footer from "../../Common/Footer";
import SupportSecOne from "./SupportSecOne";
import SupportSecTwo from "./SupportSecTwo";


class Support extends React.Component {
    render() {
      const tableRef = React.createRef();
      return (
        <div>
          <Banner/>
          <SupportSecOne/>
          <SupportSecTwo/>
        </div>
      );
    }
  }
  export default Support;