import React from "react";
class ToolSec extends React.Component {
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
                                        <img src="/images/sectionImages/Group 10977.png"/>
                                    </span>
                                </div>
                                <div className="scalecontent">
                                    <h3 className="uk-card-title">Atoms</h3>
                                </div>
                            </div>
                        </div>

                        <div className="uk-width-1-5@m uk-width-1-3@s hoverbottomborder">
                            <div className="uk-card uk-card-body text-center  toolcard">
                                <div className="card-img scaleImg uk-align-center">
                                    <span>
                                        <img src="/images/sectionImages/Group 10979.png"/>
                                    </span>
                                </div>
                                <div className="scalecontent">
                                    <h3 className="uk-card-title">Load Balancer</h3>
                                </div>
                            </div>
                        </div>

                        <div className="uk-width-1-5@m uk-width-1-3@s hoverbottomborder">
                            <div className="uk-card uk-card-body text-center  toolcard">
                                <div className="card-img scaleImg uk-align-center">
                                    <span>
                                        <img src="/images/sectionImages/Group 10982.png"/>
                                    </span>
                                </div>
                                <div className="scalecontent">
                                    <h3 className="uk-card-title">Cloud Firewalls</h3>
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
                                    <h3 className="uk-card-title">Managed Kubernates</h3>
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

export default ToolSec;