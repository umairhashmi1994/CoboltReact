import React from "react";
import Slider from "../../Common/Slider";

class NetworkVpcSecTwo extends React.Component {
    render() {
      return (
        <div>
            <section className="MobilesecFour  mobileapplicationmain linebotom">
                    <div className="uk-container uk-container-expand containerCustom">
                    <div className="" uk-grid="">
                        <div className="uk-width-1-1@m uk-width-1-1@s text-center">
                        <div className="featurecontentleft mobilefoursecleft networkvpchr">
                            <hr/>
                            <h1>VPC of your choice just <br/> a few clicks away </h1>
                            <Slider/>
                        </div>
                        </div>
                    </div>
                    </div>
            </section>
        </div>
        )
    }
}
export default NetworkVpcSecTwo;