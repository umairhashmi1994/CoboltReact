import React from "react";
import Header from "../../Common/Header";
import Banner from "./Banner"
import Footer from "../../Common/Footer";
import PricingSecOne from './PricingSecOne'
import PriceTable from './PriceTable'
import DataManageTable from "./DataMangeTable";
import PricingSecTwo from "./PricingSecTwo";
import ContainerReg from "./ContainerReg";
import ObjectStorage from "./ObjectStorage";
import LoadBalance from "./LoadBalance";
import FloatingIp from "./FloatingIp";



class Pricing extends React.Component {
    render() {
      const tableRef = React.createRef();
      return (
        <div>
          
          <Banner/>
          <PricingSecOne/>
          <PriceTable/>
          <PricingSecTwo/>
          <ContainerReg/>
          <DataManageTable/>
          <ObjectStorage/>
          <LoadBalance/>
          <FloatingIp/>
          
        </div>
      );
    }
  }
  export default  Pricing;