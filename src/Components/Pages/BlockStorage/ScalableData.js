import React from "react";
class ScalableData extends React.Component {
    render() {
      
      return (
            <div>
            <section className="buildwithme nomargin">
            <div className="uk-container uk-container-expand containerCustom bussinesscontainer">
                <div className="uk-grid-medium" uk-grid="">
                    <div className="uk-width-1-1@m">
                        <div className="buildwithmain">
                            <hr/>
                            <h3 className="f48">Scalable, data protected volumes</h3>
                        </div>
                    </div>
                <div className="uk-width-1-1@m">
                    <div className="uk-grid-small mb-40" uk-grid="" uk-height-match=".scalecontent > p " >
                        <div className="uk-width-1-3@m uk-width-1-3@s">
                            <div className="uk-card uk-card-body text-center hoverCard customcardpadding">
                                <div className="scalecontent">
                                    <h3 className="uk-card-title">API Control</h3>
                                    <p>Deploy and manage your volumes hassle free</p>
                                </div>
                                <div className="card-img scaleImg uk-align-center">
                                    <span>
                                        <img src="/images/sectionImages/Group 4743.png"/>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="uk-width-1-3@m uk-width-1-3@s">
                            <div className="uk-card uk-card-body text-center hoverCard customcardpadding">
                                <div className="scalecontent">
                                    <h3 className="uk-card-title">Flexible</h3>
                                    <p>No need to modify your VMs to expand your volumes</p>
                                </div>
                                <div className="card-img scaleImg uk-align-center">
                                    <span>
                                        <img src="/images/sectionImages/Group 4744.png"/>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="uk-width-1-3@m uk-width-1-3@s">
                            <div className="uk-card uk-card-body text-center hoverCard customcardpadding">
                                <div className="scalecontent">
                                    <h3 className="uk-card-title">Reliable and Secure</h3>
                                    <p>Encrypted data to keep your information protected</p>
                                </div>
                                <div className="card-img scaleImg uk-align-center">
                                    <span>
                                        <img src="/images/sectionImages/Group 4761.png"/>
                                    </span>
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
    }
}

export default ScalableData;