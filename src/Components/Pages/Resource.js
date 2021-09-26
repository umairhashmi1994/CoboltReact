import React from "react";
class Resource extends React.Component {
    render() {
      
      return (
          <div>
            <section className="resourcemain circlrdesigntopleft">
            <div className="">
            <div className="uk-container uk-container-expand containerCustom resourcecontainer">
                <div className="uk-text-center uk-grid-small" uk-grid="">
                    <div className="uk-width-1-1">
                        <div className="resourceHeading">
                            <hr/>
                            <h1>Insights and <br/> Resources</h1>
                        </div>
                    </div>
                    <div className="uk-width-1-3">
                        <div className="resourcecontent">
                            <img src="images/Group 2440.png"/>
                            <h6>FAQs</h6>
                            <hr/>
                        </div>
                    </div>

                    <div className="uk-width-1-3">
                        <div className="resourcecontent">
                            <img src="images/Group 2457.png"/>
                            <h6>APIs</h6>
                            <hr/>
                        </div>
                    </div>

                    <div className="uk-width-1-3">
                        <div className="resourcecontent">
                            <img src="images/Group 2472.png"/>
                            <h6>Documents</h6>
                            <hr/>
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
export default Resource;