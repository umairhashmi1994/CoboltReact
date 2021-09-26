import React from "react";

class Price extends React.Component {
    render() {
      return (
        <div>
            <section className="pricemain"> 
            <div className="mainfeature dotpattarntopleftbotton">
                <div className="uk-container uk-container-expand containerCustom">
                <div className="" uk-grid="">
                    <div className="uk-width-1-2@l uk-width-1-2@m uk-width-1-2@s" >
                        <div className="featurecontentleft">
                            <hr/>
                            <h1>Transparent Pricing</h1>
                            <p className="pricePara">Pay only for how much you consume</p>
                            <p className="priceValue">$5.00/ </p>
                            <p className="pricecontent">month <br/> <span>250 GB of storage</span></p>
                        </div>
                    </div>
                <div className="uk-width-1-2@l uk-width-1-2@m uk-width-1-2@s uk-align-center nomargin">
                    <div className="priceimage">
                        <img src="/images/sectionImages/Group 10847.png"/>
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

export default Price;
