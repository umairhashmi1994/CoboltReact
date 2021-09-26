import React from "react";
import Slider from "../../Common/Slider"
class ComputeSlider extends React.Component {
    render() {
      
      return (
            <div>
            <section className="DomainMain  ComputeSlider linebotom domainbgColor" >
            <div className="uk-container uk-container-expand containerCustom">
                <div className="uk-grid-medium" uk-grid="">
                    <div className="uk-width-1-1@m">
                        <div className="featurecontentleft computeSliderContent text-align-left " >
                            <hr/>
                            <h1>Easy DNS management</h1>
                        </div>
                    </div>
                <div className="uk-width-1-1@m slider">
                    <Slider/>
                    
                </div>
                </div>
            </div>
            </section>
            </div>
        )
    }
}

export default ComputeSlider;