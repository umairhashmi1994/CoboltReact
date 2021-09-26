import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div>
            <footer className="footer">
                <div className="uk-container">
                    <div className="" uk-grid="">
                        <div className="uk-width-1-1">
                            <div className="mainfootercontent">
                                <div className="footerlogo">
                                    <img src="/images/logo.png"/>
                                </div>
                                <div className="footermenu">
                                    <ul className="footer-uk-navbar-nav">
                                        <li><a href="#">Assets</a></li>
                                        <li><a href="#">Careers</a></li>
                                        <li><a href="#">Company</a></li>
                                        <li><a href="#">Press</a></li>
                                        <li><a href="#">Solution</a></li>
                                        <li><a href="#">Resources</a></li>
                                        <li><a href="#">Write for the Donations</a></li>
                                        <li><a href="#">Demos</a></li>
                                    </ul>
                                </div>
                                <div className="socialmedia">
                                    <a href="" uk-icon="icon:  facebook"></a>
                                    <a href="" uk-icon="icon:  instagram"></a>
                                    <a href="" uk-icon="icon:  twitter"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            
        </div>
      
    )
  }
}
export default Footer;