import React from "react";
class ScaleBussiness extends React.Component {
    render() {
      
      return (
            <div>
            <section className="buildwithme dotpattarnbottonleft nomargin">
            <div className="uk-container uk-container-expand containerCustom bussinesscontainer">
                <div className="uk-grid-medium" uk-grid="">
                    <div className="uk-width-1-1@m">
                        <div className="buildwithmain">
                            <hr/>
                            <h3>Scale your bussiness with ease</h3>
                        </div>
                    </div>
                <div className="uk-width-1-1@m">
                    <div className="uk-grid-small mb-40 mt58" uk-grid="" uk-height-match=".scalecontent>p">
                        <div className="uk-width-1-3@m uk-width-1-3@s">
                            <div className="uk-card uk-card-body text-center hoverCard customcardpadding">
                                <div className="scalecontent">
                                    <h3 className="uk-card-title">Simple</h3>
                                    <p>Cobolt Object storage is easy to use and deploy</p>
                                </div>
                                <div className="card-img scaleImg uk-align-center">
                                    <span>
                                        <img src="/images/sectionImages/Group 10817.png"/>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="uk-width-1-3@m uk-width-1-3@s">
                            <div className="uk-card uk-card-body text-center hoverCard customcardpadding">
                                <div className="scalecontent">
                                    <h3 className="uk-card-title">Affordable</h3>
                                    <p>Optimize costs & spend only on how much storage you need</p>
                                </div>
                                <div className="card-img scaleImg uk-align-center">
                                    <span>
                                        <img src="/images/sectionImages/Group 10820.png"/>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="uk-width-1-3@m uk-width-1-3@s">
                            <div className="uk-card uk-card-body hoverCard text-center customcardpadding">
                                <div className="scalecontent">
                                    <h3 className="uk-card-title">Scalable</h3>
                                    <p>Unlimited scalability without any disruption to workloads</p>
                                </div>
                                <div className="card-img scaleImg uk-align-center">
                                    <span>
                                        <img src="/images/sectionImages/Group 10826.png"/>
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

export default ScaleBussiness;