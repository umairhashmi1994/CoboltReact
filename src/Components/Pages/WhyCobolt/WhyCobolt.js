import React from "react";
import Header from "../../Common/Header";
import Banner from "./Banner"
import Footer from "../../Common/Footer";
import WhyCoboltSecOne from "./WhyCoboltSecOne";
import WhyCoboltSecTwo from "./WhyCoboltSecTwo";
import WhyCoboltSecThree from "./WhyCoboltSecThree";
import WhyCoboltSecfour from "./WhyCoboltSecfour";





class WhyCobolt extends React.Component {
    render() {
      const tableRef = React.createRef();
      return (
        <div>
          <Banner/>
          <WhyCoboltSecOne/>
          <WhyCoboltSecTwo/>
          <WhyCoboltSecThree/>
          <WhyCoboltSecfour/>
        </div>
      );
    }
  }
  export default WhyCobolt;