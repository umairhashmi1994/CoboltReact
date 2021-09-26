import React from "react";
import Header from "../../Common/Header";
import Banner from "./Banner"
import Footer from "../../Common/Footer";
import ToolProjectSecOne from './ToolProjectSecOne'
import ToolProjectSecTwo from './ToolProjectSecTwo'





class ToolProject extends React.Component {
    render() {
      const tableRef = React.createRef();
      return (
        <div>
          <Banner/>
          <ToolProjectSecOne/>
          <ToolProjectSecTwo/>
        </div>
      );
    }
  }
  export default ToolProject;