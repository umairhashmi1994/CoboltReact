import React from "react";
class Feature extends React.Component {
    render() {
      
      return (
          <div>
              <section className="feature">
        <div className="mainfeature">
            <div className="uk-container uk-container-expand containerCustom">
            <div className="uk-grid">
                <div className="uk-width-1-2" >
                    <div className="featurecontentleft">
                        <hr/>
                        <h1>Features</h1>
                        <a href="#">See More 
                            <span className="uk-icon"  uk-icon="chevron-right"></span>
                        </a>
                    </div>
                </div>
                <div className="uk-width-1-2">
                    <div className="uk-grid">
                        <div className="uk-width-1-2">
                            <div className="featureright">
                                <div className="customfeatureimage">
                                    <img src="/images/one click deploy@2x.jpg"/>
                                </div>
                                <div className="customfeaturecontact">
                                    <h1>One-Click Deploy</h1>
                                    <p>Push code to production in just one click while we take care of your cloud orchestration and  spin up your desired instances </p>    
                                </div>    
                            </div>    
                        </div>

                        <div className="uk-width-1-2">
                            <div className="featureright">
                                <div className="customfeatureimage">
                                    <img src="/images/pay as you go@2x.jpg"/>
                                </div>
                                <div className="customfeaturecontact">
                                    <h1>Pay as you Go </h1>
                                    <p>Transparent & predicable pricing without the worry of hidden costs so you can continue to build hassle free</p>    
                                </div>    
                            </div>    
                        </div>


                        <div className="uk-width-1-2">
                            <div className="featureright">
                                <div className="customfeatureimage">
                                    <img src="images/select to success@2x.jpg"/>
                                </div>
                                <div className="customfeaturecontact">
                                    <h1>Scale to Success</h1>
                                    <p>Seamlessly deploy new instances to scale up your infrastructure whenever you need to   </p>    
                                </div>    
                            </div>    
                        </div>


                        <div className="uk-width-1-2">
                            <div className="featureright">
                                <div className="customfeatureimage">
                                    <img src="images/secure@2x.jpg"/>
                                </div>
                                <div className="customfeaturecontact">
                                    <h1>Secure and Reliable </h1>
                                    <p>Dependable platform, certified with ISO27001, PCIDSS and GDPR standards to keep your data protected</p>    
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
    }}

    export default Feature;