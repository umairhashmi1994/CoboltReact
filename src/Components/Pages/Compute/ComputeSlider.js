import React from "react";
import Slider from "../../Common/Slider"
class ComputeSlider extends React.Component {
    render() {
      
      return (
            <div>
            <section className="ComputeSlider">
            <div className="uk-container uk-container-expand containerCustom">
                <div className="uk-grid-medium" uk-grid="">
                    <div className="uk-width-1-1@m">
                        <div className="buildwithmain computeSliderContent text-center">
                            <hr/>
                            <p>Deploy your Atom by choosing from a variety of readily available <br/>1-click applications, images or create a customized offering best <br/> suits your needs. </p>
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