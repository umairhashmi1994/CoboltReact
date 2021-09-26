import React from "react";
import Header from "../../Common/Header";
import Banner from "./Banner"
import Footer from "../../Common/Footer";
import ToolMoniterSecOne from "./ToolMoniterSecOne";
import ToolMoniterSecTwo from "./ToolMoniterSecTwo";


class ToolMoniter extends React.Component {
    render() {
      const tableRef = React.createRef();
      return (
        <div>
          <Banner/>
          <ToolMoniterSecOne/>
          <ToolMoniterSecTwo/>
        </div>
      );
    }
  }
  export default ToolMoniter;