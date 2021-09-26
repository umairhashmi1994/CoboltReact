import React from "react";
import Header from "../../Common/Header";
import Banner from "./Banner"
import Footer from "../../Common/Footer";
import DataProtect from "./DataProtect";
import BackSectionTwo from "./BackSectionTwo";

class Backup extends React.Component {
  render() {
    const tableRef = React.createRef();
    return (
      <div>
          <Banner/>
          <DataProtect/>
          <BackSectionTwo/>
      </div>
      )
    
    }
}
export default Backup;