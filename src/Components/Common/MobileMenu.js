import React from "react";
import { Link } from 'react-router-dom';
class MobileMenu extends React.Component {
  render() {

    return (
      <div className="mobilemenu">
        <button className="uk-float-right uk-button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #offcanvas-usage">
          <img src="images/menu_black.svg" uk-svg="" />
        </button>

        <div id="offcanvas-usage" uk-offcanvas="">
          <div className="uk-offcanvas-bar">
            <button className="uk-offcanvas-close" type="button" uk-close="" />
            <div className="MobileMenu" style={{ display: 'block' }}>
              <div className="MobileMenuWrap">
                <div className="uk-container uk-container-expand">
                  <ul className="uk-nav-default uk-nav-parent-icon uk-nav" uk-nav="">
                    <li>
                      <button type="button">Product<img src="/images/downicon.svg" uk-svg="" /></button>
                      <div uk-dropdown="mode: click; offset: 30">
                        <ul className="uk-nav uk-dropdown-nav">
                          <li className="">
                            <div className="mobileheading">
                              <img src="images/menuicon/compute.svg" />
                              <h6>Compute</h6>
                            </div>
                            <div className="mobileLink">
                              <Link to="/compute">Atoms</Link>
                              <Link to="/compute-kubernetes">Kubernets</Link>
                              <Link to="/">Platform</Link>
                            </div>
                          </li>
                          <li className="">
                            <div className="mobileheading">
                              <img src="images/menuicon/storage.svg" />
                              <h6>Storage</h6>
                            </div>
                            <div className="mobileLink">
                              <Link to="/objectstorage">Object Storage</Link>
                              <Link to="/">Volume Based</Link>
                              <Link to="/backup">Backups</Link>
                              <Link to="/">SSDs</Link>
                            </div>
                          </li>
                          <li className="">
                            <div className="mobileheading">
                              <img src="images/menuicon/networking.svg" />
                              <h6>Networking</h6>
                            </div>
                            <div className="mobileLink">
                              <Link to="/network-firewall">Firewalls</Link>
                              <Link to="/domain-dns">DNS</Link>
                              <Link to="/network-vlan">VLAN</Link>
                              <Link to="/network-load-balance">Load Balancer</Link>
                              <Link to="/network-vpc">VPC</Link>
                              <Link to="/floating-ip">Floating IPs</Link>
                            </div>
                          </li>
                          <li className="">
                            <div className="mobileheading">
                              <img src="images/menuicon/tools.svg" />
                              <h6>Tools</h6>
                            </div>
                            <div className="mobileLink">
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
                          <Link to='/products' className="menubtnres">See more clients <img src="/images/downicon.svg" uk-svg="" /></Link>
                        </div>
                      </div>
                    </li>
                    <li><Link to="/pricing">Pricing</Link></li>
                    <li>
                      <button type="button">Solutions
                        <img src="/images/downicon.svg" uk-svg="" /></button>
                      <div uk-dropdown="mode: hover; pos: bottom-left; offset: 30">
                        <ul className="">
                          <li className="mblLineBotttom">
                            <Link to="/web">
                              <div className="mobilesolution">
                                <img src="images/menuicon/web.svg" />

                                <div className="mobilesolutioncontent">
                                  <h6>Web</h6>
                                  <p>Website Hosting with Fast Performance</p>
                                </div>
                              </div>
                            </Link>
                          </li>
                          <li className="mblLineBotttom">
                            <Link to="/mobile">
                              <div className="mobilesolution">
                                <img src="images/menuicon/mobileapp.svg" />
                                <div className="mobilesolutioncontent">
                                  <h6>Mobile Apps</h6>
                                  <p>Build exemplary mobile apps seamlessly</p>
                                </div>
                              </div>

                            </Link>
                          </li>
                          <li className="mblLineBotttom">
                            <Link to="/gaming">
                              <div className="mobilesolution">
                                <img src="images/menuicon/gaming.svg" />
                                <div className="mobilesolutioncontent">
                                  <h6>Gaming</h6>
                                  <p>Build great player experiences on the most reliable cloud</p>
                                </div>
                              </div>

                            </Link>
                          </li >
                          <li className="mblLineBotttom">
                            <Link to="/startup">
                              <div className="mobilesolution">
                                <img src="images/menuicon/startup.svg" />
                                <div className="mobilesolutioncontent">
                                  <h6>Startups</h6>
                                  <p>Let Cobolt take charge of your Startup </p>
                                </div>
                              </div>

                            </Link>
                          </li>
                          <li className="mblLineBotttom">
                            <Link to="/analyticbigdata">
                              <div className="mobilesolution">
                                <img src="images/menuicon/analytics.svg" />
                                <div className="mobilesolutioncontent">
                                  <h6>Analytics & Big Data</h6>
                                  <p>Keep your data Secure and Accessible </p>
                                </div>
                              </div>

                            </Link>
                          </li>
                          <li className="mblLineBotttom">
                            <Link to="/ecommerce">
                              <div className="mobilesolution">
                                <img src="images/menuicon/ecommerce.svg" />
                                <div className="mobilesolutioncontent">
                                  <h6>E-Commerce</h6>
                                  <p>Transformative digital experiences that drive revenue</p>
                                </div>
                              </div>

                            </Link>
                          </li>
                          <li className="mblLineBotttom">
                            <Link to="/container">
                              <div className="mobilesolution">
                                <img src="images/menuicon/container.svg" />
                                <div className="mobilesolutioncontent">
                                  <h6>Containers </h6>
                                  <p>Container services for developers </p>
                                </div>
                              </div>

                            </Link>
                          </li>
                        </ul>
                        <div className="uk-text-center">
                          <Link to="/solution" className="menubtnres">View all solutions <img src="/images/downicon.svg" uk-svg="" /></Link>
                        </div>
                      </div>
                    </li>
                    <li><Link to="/">Resources</Link></li>
                    <li><Link to="/why-cobolt">Why Cobolt?</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MobileMenu;