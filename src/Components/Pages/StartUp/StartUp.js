import React from "react";
import Header from "../../Common/Header";
import Banner from "./Banner"
import Footer from "../../Common/Footer";
import StartUpSecOne from "./StartUpSecOne";
import StartUpTool from "./StartUpTool";


class StartUp extends React.Component {
    render() {
      const tableRef = React.createRef();
      return (
        <div>
          <Banner/>
          <StartUpSecOne/>
          <StartUpTool/>
        </div>
      );
    }
  }
  export default  StartUp;