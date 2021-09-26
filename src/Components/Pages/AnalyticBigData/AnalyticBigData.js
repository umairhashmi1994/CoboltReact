import React from "react";
import Header from "../../Common/Header";
import Banner from "./Banner";
import AnalyticBigDataSecOne from "./AnalyticBigDataSecOne"
import AnalyticSecTwo from "./AnalyticSecTwo"
import Footer from "../../Common/Footer";


class AnalyticBigData extends React.Component {
    render() {
      const tableRef = React.createRef();
      return (
        <div>
          <Banner/>
          <AnalyticBigDataSecOne/>
          <AnalyticSecTwo/>
        </div>
      );
    }
  }
  export default  AnalyticBigData;