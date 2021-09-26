import React from "react";
import { Link } from "react-router-dom";
class Banner extends React.Component {
    render() {
      return (
          <div>
              <section
          className="HomeBannerTwo"
          style={{ backgroundImage: "url(/images/bgbanner4.jpg)" }}
        >
          {/* <img className="bannerimg" src="/images/sectionImages/Group 10844.png" /> */}
          <div className="mdl">
            <div className="mdlinner">
            <div className="uk-container uk-container-expand containerCustom">
              <div uk-grid="">
                <div className="uk-width-1-1@S">
                  <div className="mdl">
                    <div className="mdlinner bannertwo text-center">
                      <h1>Simple Solutions To <br/>Power Complex Missions</h1>
                      <p>Exceptional performance at a great price</p>
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