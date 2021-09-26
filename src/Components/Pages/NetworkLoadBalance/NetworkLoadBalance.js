import React from "react";
import Header from "../../Common/Header";
import Banner from "./Banner"
import Footer from "../../Common/Footer";
import NetworkLoadBalanceSecOne from "./NetworkLoadBalanceSecOne";
import NetworkLoadBalanceSecTwo from "./NetworkLoadBalanceSecTwo";
import NetworkLoadBalanceSecThree from "./NetworkLoadBalanceSecThree"


class NetworkLoadBalance extends React.Component {
    render() {
      const tableRef = React.createRef();
      return (
        <div>
          <Banner/>
          <NetworkLoadBalanceSecOne/>
          <NetworkLoadBalanceSecTwo/>
          <NetworkLoadBalanceSecThree/>
        </div>
      );
    }
  }
  export default  NetworkLoadBalance;