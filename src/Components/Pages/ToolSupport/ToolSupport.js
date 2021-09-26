import React from "react";
import Header from "../../Common/Header";
import Banner from "./Banner"
import Footer from "../../Common/Footer";
import ToolSupportSecOne from "./ToolSupportSecOne";
import ToolSupportSecTwo from "./ToolSupportSecTwo";





class ToolSupport extends React.Component {
    render() {
      const tableRef = React.createRef();
      return (
        <div>
          <Banner/>
          <ToolSupportSecOne/>
          <ToolSupportSecTwo/>
        </div>
      );
    }
  }
  export default ToolSupport;