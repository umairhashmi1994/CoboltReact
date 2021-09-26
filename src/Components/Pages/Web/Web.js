import React from "react";
import Header from "../../Common/Header";
import Banner from "./Banner"
import Footer from "../../Common/Footer";
import WebSecOne from "./WebSecOne";
import Tool from "./Tool";

class Web extends React.Component {
    render() {
      const tableRef = React.createRef();
      return (
        <div>
          <Banner/>
          <WebSecOne/>
          <Tool/>
        </div>
      );
    }
  }
  export default  Web;