import React from "react";
class BackSectionTwo extends React.Component {
    render() {
      
      return (
            <div>
            <section className="sectiontwoback nomargin linebotom">
            <div className="uk-container uk-container-expand containerCustom bussinesscontainer">
                <div className="uk-grid-medium" uk-grid="">
                    <div className="uk-width-1-1@m">
                        <div className="buildwithmain">
                            <hr/>
                        </div>
                    </div>
                <div className="uk-width-1-1@m">
                    <div className="uk-grid-small mb-40 mt58" uk-grid=""  uk-height-match="target: > div > .uk-card" >
                        <div className="uk-width-1-3@m uk-width-1-3@s">
                            <div className="uk-card uk-card-body text-center hoverCard backcardpadding">
                                <div className="scalecontent">
                                    <h3 className="uk-card-title">One click backups</h3>
                                </div>
                                <div className="card-img scaleImg uk-align-center">
                                    <span>
                                        <img src="/images/sectionImages/Group 10844.png"/>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="uk-width-1-3@m uk-width-1-3@s">
                            <div className="uk-card uk-card-body text-center hoverCard backcardpadding">
                                <div className="scalecontent">
                                    <h3 className="uk-card-title">Affordable</h3>
                                </div>
                                <div className="card-img scaleImg uk-align-center">
                                    <span>
                                        <img src="/images/sectionImages/Group 10846.png"/>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="uk-width-1-3@m uk-width-1-3@s">
                            <div className="uk-card uk-card-body text-center hoverCard backcardpadding">
                                <div className="scalecontent">
                                    <h3 className="uk-card-title">Scheduled automatic backups</h3>
                                </div>
                                <div className="card-img scaleImg uk-align-center">
                                    <span>
                                        <img src="/images/sectionImages/Group 10848.png"/>
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

export default BackSectionTwo;