import React, { Component } from 'react';
import {withRouter, Switch, Route, BrowserRouter} from 'react-router-dom';
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
import Home from "../Components/Pages/Home";
import ObjectStorage  from "../Components/Pages/ObjectStorage/ObjectStorage";
import Backup from '../Components/Pages/Backup/Backup';
import {Helmet} from "react-helmet";
import BlockStorage from '../Components/Pages/BlockStorage/BlockStorage';
import Solution from '../Components/Pages/Solution/Solution';
import Gaming from '../Components/Pages/Gaming/Gaming';
import Web from '../Components/Pages/Web/Web';
import Mobile from '../Components/Pages/Mobile/Mobile';
import AnalyticBigData from '../Components/Pages/AnalyticBigData/AnalyticBigData';
import Container from '../Components/Pages/Container/Container';
import Ecommerce from '../Components/Pages/Ecommerce/Ecommerce';
import StartUp from '../Components/Pages/StartUp/StartUp';
import Compute from '../Components/Pages/Compute/Compute';
import ComputeKubernates from '../Components/Pages/ComputeKubernetes/ComputeKubernates';
import DomainDns from '../Components/Pages/DomainDns/DomainDns';
import FloatingIP from '../Components/Pages/FloatingIP/FloatingIP';
import NetworkLoadBalance from '../Components/Pages/NetworkLoadBalance/NetworkLoadBalance';
import NetworkVpc from '../Components/Pages/NetworkVpc/NetworkVpc';
import NetworkFirewall from '../Components/Pages/NetworkFirewall/NetworkFirewall';
import Products from '../Components/Pages/Products/Products';
import ToolsCli from '../Components/Pages/ToolsCli/ToolsCli';
import Toolsupport from '../Components/Pages/ToolSupport/ToolSupport';
import ToolTeam from '../Components/Pages/ToolTeam/ToolsTeam';
import ToolAPI from '../Components/Pages/ToolAPI/ToolAPI';
import ToolMoniter from '../Components/Pages/ToolMoniter/ToolMoniter';
import ToolProject from '../Components/Pages/ToolProject/ToolProject';
import Pricing from '../Components/Pages/Pricing/Pricing';
import VLAN from '../Components/Pages/VLAN/VLAN';
import WhyCobolt from '../Components/Pages/WhyCobolt/WhyCobolt';
import Support from '../Components/Pages/Support/Support';




class App extends Component {
  render() {
    return (
      <BrowserRouter>
         <Header/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/objectstorage" component={ObjectStorage}/>
            <Route exact path="/backup" component={Backup}/>
            <Route exact path="/blockstorage">
              <BlockStorage/>
            </Route>
            <Route exact path="/solution">
              <Solution/>
            </Route>
            <Route exact path="/gaming">
              <Gaming/>
            </Route>
            <Route exact path="/web">
              <Web/>
            </Route>
            <Route exact path="/mobile">
              <Mobile/>
            </Route>
            <Route exact path="/analyticbigdata">
              <AnalyticBigData/>
            </Route>
            <Route exact path="/container">
              <Container/>
            </Route>
            <Route exact path="/ecommerce">
              <Ecommerce/>
            </Route>
            <Route exact path="/startup">
              <StartUp/>
            </Route>
            <Route exact path="/compute">
              <Compute/>
            </Route>
            <Route exact path="/compute-kubernetes">
              <ComputeKubernates/>
            </Route>
            <Route exact path="/domain-dns">
              <DomainDns/>
            </Route>
            <Route exact path="/floating-ip">
              <FloatingIP/>
            </Route>
            <Route exact path="/network-load-balance">
              <NetworkLoadBalance/>
            </Route>
            <Route exact path="/network-vpc">
              <NetworkVpc/>
            </Route>
            <Route exact path="/network-firewall">
              <NetworkFirewall/>
            </Route>
            <Route exact path="/products">
              <Products/>
            </Route>
            <Route exact path="/tools-cli">
              <ToolsCli/>
            </Route>
            <Route exact path="/tools-support">
              <Toolsupport/>
            </Route>
            <Route exact path="/tools-team">
              <ToolTeam/>
            </Route>
            <Route exact path="/tools-api">
              <ToolAPI/>
            </Route>
            <Route exact path="/tools-moniter">
              <ToolMoniter/>
            </Route>
            <Route exact path="/tools-project">
              <ToolProject/>
            </Route>
            <Route exact path="/pricing">
              <Pricing/>
            </Route>
            <Route exact path="/network-vlan">
              <VLAN/>
            </Route>
            <Route exact path="/why-cobolt">
              <WhyCobolt/>
            </Route>
            <Route exact path="/support">
              <Support/>
            </Route>

        </Switch>
        <Footer/>
      </BrowserRouter>
    );
  }
}
export default App;
