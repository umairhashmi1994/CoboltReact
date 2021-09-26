import React from "react";
import { Link } from "react-router-dom";
class Banner extends React.Component {
    render() {
      return (
          <div>
              <section
          className="HomeBannerTwo"
          style={{ backgroundImage: "url(/images/GamingBanner.jpg)" }}
        >
          {/* <img className="bannerimg" src="/images/sectionImages/Group 10844.png" /> */}
          <div className="mdl">
            <div className="mdlinner">
            <div className="uk-container uk-container-expand containerCustom">
              <div uk-grid="">
                <div className="uk-width-4-5@m uk-width-1-1@s">
                  <div className="mdl">
                    <div className="mdlinner bannertwo">
                      <h1>Build Great Player Experiences On The Most Reliable Cloud</h1>
                      <p>Cobolt offers a secure and reliable platform to securely build your game with the liberty to scale with just a click. </p>
                      <a class="gamingBanbtn" href="#">Get Started Now</a>
                      <a class="gamingBanbtn ml20" href="#">Talk to a Representative</a>
                      </div>
                    </div>
                </div>
                {/* <div className="uk-width-1-2@m uk-width-1-2@s">
                  <form className="HomeForm">
                    <div className="HomeFormHead">
                      <div className="mdl">
                        <div className="mdlinner">
                          <h3>START CREATING!</h3>
                        </div>
                      </div>
                    </div>
                    <div className="HomeFormBody">
                      <h4>SIGN UP</h4>
                      <div className="fldbox mb-10">
                        <span className="uk-form-icon" uk-icon="icon: user" />
                        <input
                          className="uk-input"
                          type="text"
                          placeholder="Username"
                        />
                      </div>
                      <div className="fldbox">
                        <span className="uk-form-icon" uk-icon="icon: lock" />
                        <input
                          className="uk-input"
                          type="password"
                          placeholder="Password"
                        />
                      </div>
                      <div className="fldbox mb-10 mt-5">
                        <div uk-grid="">
                          <div className="uk-width-1-2">
                            <div className="fldbox uk-text-left">
                              <label>
                                <input
                                  className="uk-checkbox"
                                  type="checkbox"
                                  defaultChecked
                                />{" "}
                                Remember
                              </label>
                            </div>
                          </div>
                          <div className="uk-width-1-2">
                            <div className="fldbox uk-text-right">
                              <Link to="/">Forget Password?</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="fldbox nomargin">
                        <button>LOGIN</button>
                      </div>
                    </div>
                  </form>
                </div> */}
              </div>
            </div>
            </div>
          </div>
          
        </section>
          </div>
      )
    
    }}

export default Banner;