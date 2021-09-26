import React from "react";
import SwiperSlider from "../../Common/SwiperSlider";
import Swiper from "../../Common/SwiperSlider";

class AssignFloatingIp extends React.Component {
    render() {
      return (
        <div>
            <section className="possibilities">
                <div className="bgImgPoss floatingIPBg nopaddingtop">
                    <div className="uk-container uk-container-expand containerCustom">
                    <div className="" uk-grid="">
                        <div className="uk-width-3-5@m uk-width-1-1@s">
                        <div className="featurecontentleft">
                            <hr/>
                            <h1>Seamlessly assign floating IPs </h1>    
                            </div>
                        </div>


                        <div className="uk-width-2-5@m uk-width-1-1@s">
                        <div className="posright">
                        <div className="uk-grid-small mb-40" uk-grid="" uk-height-match="row: true">
                            <SwiperSlider/>
                        
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
export default AssignFloatingIp;