import React from "react";
import Header from "../../Common/Header";
import Banner from "./Banner"
import Footer from "../../Common/Footer";
import ToolTeamSecOne from "./ToolTeamSecOne";


class ToolSupport extends React.Component {
    render() {
      const tableRef = React.createRef();
      return (
        <div>
          <Banner/>
          <ToolTeamSecOne/>
        </div>
      );
    }
  }
  export default ToolSupport;