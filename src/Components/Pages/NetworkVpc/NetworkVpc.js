import React from "react";
import Header from "../../Common/Header";
import Banner from "./Banner"
import Footer from "../../Common/Footer";
import NetworkVpcSecOne from "./NetworkVpcSecOne"
import NetworkVpcSecTwo from "./NetworkVpcSecTwo"


class NetworkVpc extends React.Component {
    render() {
      const tableRef = React.createRef();
      return (
        <div>
          <Banner/>
          <NetworkVpcSecOne/>
          <NetworkVpcSecTwo/> 
        </div>
      );
    }
  }
  export default NetworkVpc;