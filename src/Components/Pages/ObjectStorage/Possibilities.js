import React from "react";

class Possibilities extends React.Component {
    render() {
      return (
        <div>
            <section className="possibilities">
                <div className="bgImgPoss">
                    <div className="uk-container uk-container-expand containerCustom">
                    <div className="" uk-grid="">
                        <div className="uk-width-2-5@m uk-width-1-1@s">
                        <div className="featurecontentleft">
                            <hr/>
                            <h1>Built for infinite possibilities</h1>    
                            </div>
                        </div>


                        <div className="uk-width-3-5@m uk-width-1-1@s">
                            <div className="posright">
                        <div className="uk-grid-small mb-40" uk-grid="" uk-height-match="row: true">
                        <div className="uk-width-1-2@s">



                            <div className="uk-card uk-card-body cardpos mt120 mb30">
                            <div className="card-content-p">
                                    <p>Host Static Websites</p>
                                </div>
                                <div className="card-img cardImgP">
                                    <span>
                                        <img src="/images/sectionImages/pos01.png"/>
                                    </span>
                                </div>
                               
                            </div>
                            <div className="uk-card uk-card-body cardpos">
                            <div className="card-content-p">
                                    <p>Automated Backups</p>
                                </div>
                                <div className="card-img cardImgP">
                                    <span>
                                        <img src="/images/sectionImages/Group 10834.png"/>
                                    </span>
                                </div>
                               
                            </div>
                        </div>

                        <div className="uk-width-1-2@s">
                            <div className="uk-card uk-card-body cardpos mb30">
                            <div className="card-content-p">
                                    <p>Media WorkFlowss</p>
                                </div>
                                <div className="card-img cardImgP">
                                    <span>
                                        <img src="/images/sectionImages/pos02.png"/>
                                    </span>
                                </div>
                               
                            </div>
                            <div className="uk-card uk-card-body cardpos">
                            <div className="card-content-p">
                                    <p>Relational Databases</p>
                                </div>
                                <div className="card-img cardImgP">
                                    <span>
                                        <img src="/images/sectionImages/pos03.png"/>
                                    </span>
                                </div>
                               
                            </div>
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
export default Possibilities;