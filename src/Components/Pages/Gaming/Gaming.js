import React from "react";
import Header from "../../Common/Header";
import Banner from "./Banner"
import Footer from "../../Common/Footer";
import GamingSecOne from "./GamingSecOne";
import ToolSec from "./ToolSec";

class Gaming extends React.Component {
    render() {
      const tableRef = React.createRef();
      return (
        <div>
          <Banner/>
          <GamingSecOne/>
          <ToolSec/>
        </div>
      );
    }
  }
  export default  Gaming;