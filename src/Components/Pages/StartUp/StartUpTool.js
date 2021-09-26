import React from "react";
class StartUpTool extends React.Component {
    render() {
      
      return (
            <div>
            <section className="sectiontwoback nomargin linebotom toolsecmain">
            <div className="uk-container uk-container-expand containerCustom">
                <div className="uk-grid-medium" uk-grid="">
                    <div className="uk-width-1-1@m">
                        <div className="buildwithmain">
                            <hr/>
                            <h3> Tools to Build</h3>
                        </div>
                    </div>
                <div className="uk-width-1-1@m">
                    <div className="uk-grid mb-40 mt58" uk-grid=""  uk-height-match="target: > div > .uk-card" >
                        <div className="uk-width-1-5@m uk-width-1-3@s hoverbottomborder">
                            <div className="uk-card uk-card-body text-center toolcard">
                                <div className="card-img scaleImg uk-align-center">
                                    <span>
                                        <img src="/images/sectionImages/Group 11001.png"/>
                                    </span>
                                </div>
                                <div className="scalecontent">
                                    <h3 className="uk-card-title">Flexible Compute</h3>
                                </div>
                            </div>
                        </div>

                        <div className="uk-width-1-5@m uk-width-1-3@s hoverbottomborder">
                            <div className="uk-card uk-card-body text-center  toolcard">
                                <div className="card-img scaleImg uk-align-center">
                                    <span>
                                        <img src="/images/sectionImages/Group 30069.png"/>
                                    </span>
                                </div>
                                <div className="scalecontent">
                                    <h3 className="uk-card-title">Managed Databases</h3>
                                </div>
                            </div>
                        </div>

                        <div className="uk-width-1-5@m uk-width-1-3@s hoverbottomborder">
                            <div className="uk-card uk-card-body text-center  toolcard">
                                <div className="card-img scaleImg uk-align-center">
                                    <span>
                                        <img src="/images/sectionImages/Group 8521.png"/>
                                    </span>
                                </div>
                                <div className="scalecontent">
                                    <h3 className="uk-card-title">Storage</h3>
                                </div>
                            </div>
                        </div>

                        <div className="uk-width-1-5@m uk-width-1-3@s hoverbottomborder">
                            <div className="uk-card uk-card-body text-center toolcard">
                                <div className="card-img scaleImg uk-align-center">
                                    <span>
                                        <img src="/images/sectionImages/Group 10984.png"/>
                                    </span>
                                </div>
                                <div className="scalecontent">
                                    <h3 className="uk-card-title">Managed Kubernetes</h3>
                                </div>
                            </div>
                        </div>

                        <div className="uk-width-1-5@m uk-width-1-3@s hoverbottomborder">
                            <div className="uk-card uk-card-body text-center toolcard">
                                <div className="card-img scaleImg uk-align-center">
                                    <span>
                                        <img src="/images/sectionImages/Group 10986.png"/>
                                    </span>
                                </div>
                                <div className="scalecontent">
                                    <h3 className="uk-card-title">VPC</h3>
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

export default StartUpTool;