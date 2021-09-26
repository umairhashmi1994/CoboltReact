import React from "react";
import Header from "../../Common/Header";
import Banner from "./Banner"
import Footer from "../../Common/Footer";
import NetworkFirewallSecTwo from "./NetworkFirewallSecTwo";
import NetworkFirewallSecThree from "./NetworkFirewallSecThree";



class NetworkFirewall extends React.Component {
    render() {
      const tableRef = React.createRef();
      return (
        <div>
          <Banner/>
          <NetworkFirewallSecTwo/>
          <NetworkFirewallSecThree/>
        </div>
      );
    }
  }
  export default NetworkFirewall;