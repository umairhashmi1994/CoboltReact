import React from "react";
class ProductSecFour extends React.Component {
    render() {
      
      return (
            <div>
            <section className="sectiontwoback nomargin linebotom">
            <div className="uk-container uk-container-expand containerCustom productCustomContainer">
                <div className="uk-grid-medium" uk-grid="">
                    <div className="uk-width-1-1@m">
                        <div className="buildwithmain">
                            <hr/>
                            <h3> Scale with ease</h3>
                        </div>
                    </div>
                <div className="uk-width-1-1@m">
                    <div className="uk-grid-large mb-40 mt58" uk-grid=""  uk-height-match="target: > div > .uk-card" >
                        <div className="uk-width-1-3@m uk-width-1-3@s">
                            <div className="uk-card uk-card-body text-center toolcard">
                                <div className="card-img scaleImg uk-align-center">
                                    <span>
                                        <img src="/images/sectionImages/Group 10864.jpg"/>
                                    </span>
                                </div>
                                <div className="scalecontent productcontent">
                                    <h3 className="uk-card-title">Static Websites</h3>
                                </div>
                            </div>
                        </div>

                        <div className="uk-width-1-3@m uk-width-1-3@s">
                            <div className="uk-card uk-card-body text-center  toolcard">
                                <div className="card-img scaleImg uk-align-center">
                                    <span>
                                        <img src="/images/sectionImages/Group 28186.png"/>
                                    </span>
                                </div>
                                <div className="scalecontent productcontent">
                                    <h3 className="uk-card-title">Web Applications </h3>
                                </div>
                            </div>
                        </div>

                        <div className="uk-width-1-3@m uk-width-1-3@s">
                            <div className="uk-card uk-card-body text-center  toolcard">
                                <div className="card-img scaleImg uk-align-center">
                                    <span>
                                        <img src="/images/sectionImages/Group 30552.png"/>
                                    </span>
                                </div>
                                <div className="scalecontent productcontent">
                                    <h3 className="uk-card-title">APIs</h3>
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

export default ProductSecFour;