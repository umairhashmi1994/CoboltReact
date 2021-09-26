import React from 'react';
import { Link } from 'react-router-dom';
import '../../../node_modules/uikit/dist/css/uikit.css';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import style from '../../Assets/css/style.css';
import MobileMenu from './MobileMenu';

UIkit.use(Icons);

class Header extends React.Component {

componentDidMount(){
  console.log('COMPONENT MOUNTED');
}

  render() {
    return (
      <header>
        <div className="uk-container uk-container-expand containerCustom">
          {/* Top Menu Start */}
          <div className="TopMenubar">
            <ul>
              <li><Link to="/"><img src="/images/searchicon.svg" uk-svg="" /></Link></li>
              <li><Link to="/">Docs</Link></li>
              <li><Link to="/support">Support</Link></li>
              <li><Link to="/">Sales</Link></li>
              <li><Link to="/">Careers</Link></li>
              <li><Link to="/">Log In</Link></li>
              <li><Link to="/"><img src="/images/usericon2.svg" uk-svg="" /></Link></li>
            </ul>
          </div>
          {/* Top Menu End */}
          {/* Main Menu Start */}
          <div className="Menubar">
            <Link className="Logo" to="/"><img src="/images/logo.svg" /></Link>
            <ul className="mainMenu">
              <li>
                <button type="button">Product <img src="/images/downicon.svg" uk-svg="" /></button>
                <div uk-dropdown="mode: hover; pos: bottom-left; offset: 30">
                  <ul className="SubMenu uk-grid-small nomargintop" uk-grid="">
                    <li className="uk-width-1-2">
                      <div className="SubMenuImg bottomborder">
                        <img src="images/menuicon/compute.svg" />
                        <h6>Compute</h6>
                      </div>
                      <div className="SubMenuTxt">
                        <Link to="/compute">Atoms</Link>
                        <Link to="compute-kubernetes">Kubernets</Link>
                        <Link to="/">Platform</Link>
                      </div>
                    </li>
                    <li className="uk-width-1-2">
                      <div className="SubMenuImg bottomborder">
                        <img src="images/menuicon/storage.svg" />
                        <h6>Storage</h6>
                      </div>
                      <div className="SubMenuTxt">
                        <Link to="/objectstorage">Object Storage</Link>
                        <Link to="/">Volume Based</Link>
                        <Link to="/backup">Backups</Link>
                        <Link to="/">SSDs</Link>
                      </div>
                    </li>
                    <li className="uk-width-1-2">
                      <div className="SubMenuImg bottomborder bordertop">
                        <img src="images/menuicon/networking.svg" />
                        <h6>Networking</h6>
                      </div>
                      <div className="SubMenuTxt">
                        <Link to="/network-firewall">Firewalls</Link>
                        <Link to="/domain-dns">DNS</Link>
                        <Link to="/network-vlan">VLAN</Link>
                        <Link to="/network-load-balance">Load Balancer</Link>
                        <Link to="/network-vpc">VPC</Link>
                        <Link to="/floating-ip">Floating IPs</Link>
                      </div>
                    </li>
                    <li className="uk-width-1-2">
                      <div className="SubMenuImg bottomborder bordertop">
                        <img src="images/menuicon/tools.svg" />
                        <h6>Tools</h6>
                      </div>
                      <div className="SubMenuTxt">
                        <Link to="/tools-api">API</Link>
                        <Link to="/tools-moniter">Monitoring</Link>
                        <Link to="/tools-team">Teams</Link>
                        <Link to="/tools-support">Support</Link>
                        <Link to="/tools-cli">CLI</Link>
                        <Link to="/tools-project">Projects</Link>
                      </div>
                    </li>
                  </ul>
                  <div className="uk-text-center">
                    <Link to='/products' className="menubtn">See more clients <img src="/images/downicon.svg" uk-svg="" /></Link>
                  </div>
                </div>
              </li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li>
                <button type="button">Solutions<img src="/images/downicon.svg" uk-svg="" /></button>
                <div className="customdropdown" uk-dropdown="mode: hover; pos: bottom-left; offset: 30">
                  <ul className="SubMenu">
                    <li className="solutionlist">
                      <Link to="/web">
                        <div className="SolSubMenu">
                          <img src="images/menuicon/web.svg" />

                          <div className="SolSubMenuTxt">
                            <h6>Web</h6>
                            <p>Website Hosting with Fast Performance</p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="solutionlist">
                      <Link to="/mobile">
                        <div className="SolSubMenu">
                          <img src="images/menuicon/mobileapp.svg" />
                          <div className="SolSubMenuTxt">
                            <h6>Mobile Apps</h6>
                            <p>Build exemplary mobile apps seamlessly</p>
                          </div>
                        </div>

                      </Link>
                    </li>
                    <li className="solutionlist">
                      <Link to="/gaming">
                        <div className="SolSubMenu">
                          <img src="images/menuicon/gaming.svg" />
                          <div className="SolSubMenuTxt">
                            <h6>Gaming</h6>
                            <p>Build great player experiences on the most reliable cloud</p>
                          </div>
                        </div>

                      </Link>
                    </li >
                    <li className="solutionlist">
                      <Link to="/startup">
                        <div className="SolSubMenu">
                          <img src="images/menuicon/startup.svg" />
                          <div className="SolSubMenuTxt">
                            <h6>Startups</h6>
                            <p>Let Cobolt take charge of your Startup </p>
                          </div>
                        </div>

                      </Link>
                    </li>
                    <li className="solutionlist">
                      <Link to="/analyticbigdata">
                        <div className="SolSubMenu">
                          <img src="images/menuicon/analytics.svg" />
                          <div className="SolSubMenuTxt">
                            <h6>Analytics & Big Data</h6>
                            <p>Keep your data Secure and Accessible </p>
                          </div>
                        </div>

                      </Link>
                    </li>
                    <li className="solutionlist">
                      <Link to="/ecommerce">
                        <div className="SolSubMenu">
                          <img src="images/menuicon/ecommerce.svg" />
                          <div className="SolSubMenuTxt">
                            <h6>E-Commerce</h6>
                            <p>Transformative digital experiences that drive revenue</p>
                          </div>
                        </div>

                      </Link>
                    </li>
                    <li className="solutionlist">
                      <Link to="/container">
                        <div className="SolSubMenu">
                          <img src="images/menuicon/container.svg" />
                          <div className="SolSubMenuTxt">
                            <h6>Containers </h6>
                            <p>Container services for developers </p>
                          </div>
                        </div>

                      </Link>
                    </li>
                  </ul>
                  <div className="uk-text-center">
                    <Link to="solution" className="menubtn">View all solutions <img src="/images/downicon.svg" uk-svg="" /></Link>
                  </div>
                </div>
              </li>
              <li><Link to="/">Resources</Link></li>
              <li><Link to="/why-cobolt">Why Cobolt?</Link></li>
            </ul>
          </div>
          {/* Main Menu Start */}
        </div>

        {/* mobile menu start */}
        {/* <MobileMenu/> */}
        <MobileMenu />
        {/* mobile menu end */}
      </header>
    )
  }
}
export default Header;