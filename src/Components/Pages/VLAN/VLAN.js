import React from "react";
import Header from "../../Common/Header";
import Banner from "./Banner"
import Footer from "../../Common/Footer";
import VLANSecOne from "./VLANSecOne";

class VLAN extends React.Component {
    render() {
      const tableRef = React.createRef();
      return (
        <div>
          <Banner/>
          <VLANSecOne/>
        </div>
      );
    }
  }
  export default  VLAN;