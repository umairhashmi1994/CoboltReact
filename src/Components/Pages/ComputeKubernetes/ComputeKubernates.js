import React from "react";
import Header from "../../Common/Header";
import Banner from "./Banner"
import Footer from "../../Common/Footer";
import ComputeKubernetesSecOne from "./ComputeKubernetesSecOne"
import ComputeKubernetesSecTwo from "./ComputeKubernetesSecTwo"

class ComputeKubernates extends React.Component {
    render() {
      const tableRef = React.createRef();
      return (
        <div>
          <Banner/>
          <ComputeKubernetesSecOne/>
          <ComputeKubernetesSecTwo/>
        </div>
      );
    }
  }
  export default  ComputeKubernates;