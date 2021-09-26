import React from "react";
import Header from "../../Common/Header";
import Banner from "./Banner"
import Footer from "../../Common/Footer";
import FloatingIPSecOne from "./FloatingIPSecOne";
import AssignFloatingIp from "./AssignFloatingIP";


class FloatingIP extends React.Component {
    render() {
      const tableRef = React.createRef();
      return (
        <div>
          <Banner/>
          <FloatingIPSecOne/>
          {/* <FloatingIP/> */}
          <AssignFloatingIp/>
        </div>
      );
    }
  }
  export default  FloatingIP;