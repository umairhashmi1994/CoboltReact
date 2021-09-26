import React from "react";
class VLANSecOne extends React.Component {
    render() {
      
      return (
        <div>
        <section className="gaming DomainMain linebotom vlanmain">
        <div className="uk-container uk-container-expand containerCustom">
            <div className="" uk-grid="">
                <div className="uk-width-1-2@m uk-width-1-1@s">
                    <div className="useCaseContent gamingleftcontent domainSecLeft featurecontentleft">
                        <hr/>
                        <h3>Seamless and Secure Communication between Atoms </h3>
                        <p>Having a VLAN enables you to determine which public and private networks will have access to your Atoms. You can ensure secure transmission of sensitive data across your private VLAN. This is especially important for industries collecting customer information such as telecom, healthcare and ecommerce. VLAN allows you to further optimize your traffic by segmenting traffic into smaller lanes reducing the influx of traffic in one single instance and thereby eliminating application latency </p>
                    </div>
                </div>
                <div className="uk-width-1-2@m uk-width-1-2@s  uk-width-1-1@s">
                    <div className="vlanimage">
                        <img src="images/sectionImages/Group 12134.png"/>
                    </div>
                </div>                
        </div>
        </div>
        </section>
        </div>
      )
    }
}

export default VLANSecOne;