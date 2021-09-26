import React from "react";
import { Link } from "react-router-dom";
class Banner extends React.Component {
    render() {
      return (
          <div>
              <section
          className="HomeBannerTwo"
          style={{ backgroundImage: "url(/images/mobileBanner.png)" }}
        >
          {/* <img className="bannerimg" src="/images/sectionImages/Group 10844.png" /> */}
          <div className="mdl">
            <div className="mdlinner">
            <div className="uk-container uk-container-expand containerCustom">
              <div uk-grid="">
                <div className="uk-width-3-5@m uk-width-1-2@s">
                  <div className="mdl">
                    <div className="mdlinner bannertwo">
                      <h1>Build Exemplary Mobile Apps Seamlessly</h1>
                      <p>Build and reliably manage cross-platform and native apps using our seamless and powerful cloud for developers.  </p>
                      <a class="gamingBanbtn" href="#">Get Started Now</a>
                      <a class="gamingBanbtn ml20" href="#">Talk to a Representative</a>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          
        </section>
          </div>
      )
    
    }}

export default Banner;