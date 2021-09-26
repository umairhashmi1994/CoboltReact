import React from "react";
import Header from "../../Common/Header";
import Banner from "./Banner"
import Footer from "../../Common/Footer";
import ToolsCliSecOne from "./ToolsCliSecOne";
import ToolsCliSecTwo from "./ToolsCliSecTwo";




class ToolsCLi extends React.Component {
  render() {
    const tableRef = React.createRef();
    return (
      <div>
        <Banner />
        <ToolsCliSecOne />
        <ToolsCliSecTwo />
      </div>
    );
  }
}
export default ToolsCLi;