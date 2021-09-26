import React from "react";

class FloatingIPSecOne extends React.Component {
    render() {
      return (
        <div>
            <section className="pricemain"> 
            <div className="mainfeature">
                <div className="uk-container uk-container-expand containerCustom">
                <div className="" uk-grid="">
                    <div className="uk-width-1-1@l uk-width-1-1@m uk-width-1-1@s" >
                        <div className="featurecontentleft flotingIPContent">
                            <hr/>
                            <h1>Continuous Deployment <br/> with failover facility </h1>
                            <p>You can implement a failover mechanism and prevent downtime by ensuring that in case of any trouble in
                                the active server, your floating IP is assigned to a passive server. This can be done in an effortless manner
                                in a high availability cluster by using Floating IP’s easily accessible on Cobolt’s user intuitive customer
                                portal. Enabling IP blocks, so you can configure multiple IP addresses to your services </p>
                            <img src="/images/sectionImages/Group 30165.png"/>
                        
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

export default FloatingIPSecOne;
