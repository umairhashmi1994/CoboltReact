import React from "react";
class PricingSecOne extends React.Component {
    render() {
      
      return (
            <div>
            <section className="PriceSecTwoMain nomargin">
            <div className="uk-container uk-container-expand containerCustom pricingCustomContainer">
                <div className="uk-grid-small" uk-grid="" uk-height-match="target: > div > .priceCard">
                    <div className="uk-width-1-1@m">
                        <div className="buildwithmain">
                            <hr/>
                            <h3>Droplets</h3>
                        </div>
                    </div>

                    <div className="uk-width-1-2@m uk-width-1-1@s">
                        <div className="uk-card uk-card-body text-center priceCard">
                            <div className="PriceCardContent">
                                <h3 className="uk-card-title">$5.00/mo</h3>
                                <p className="uk-card-para">$0.00744/hour</p>
                            </div>
                        </div>
                    </div>


                    <div className="uk-width-1-2@m uk-width-1-1@s">
                        <div className="uk-card uk-card-body text-center priceCard">
                        <div className="PriceCardContent">
                            <p className="uk-card-para"><b>1GB</b> / 1CPU <br/> 25 GB SSD Disk <br/> 1000 GB transfer</p>
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

export default PricingSecOne;