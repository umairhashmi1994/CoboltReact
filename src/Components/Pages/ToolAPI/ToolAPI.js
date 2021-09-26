import React from "react";
import Header from "../../Common/Header";
import Banner from "./Banner"
import Footer from "../../Common/Footer";
import ToolAPISecOne from "./ToolAPISecOne";


class ToolAPI extends React.Component {
    render() {
      const tableRef = React.createRef();
      return (
        <div>
          <Banner/>
          <ToolAPISecOne/>
          {/* <ToolTeamSecOne/> */}
        </div>
      );
    }
  }
  export default ToolAPI;