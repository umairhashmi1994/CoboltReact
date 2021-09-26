import React from "react";
class PricingSecTwo extends React.Component {
    render() {
      
      return (
        <div>
        <section className="gaming DomainMain dotComputelefttop">
        <div className="uk-container uk-container-expand containerCustom">
            <div className="uk-grid-large" uk-grid="" uk-height-match="target: > div > .priceCard2">
                <div className="uk-width-1-1@m uk-width-1-1@s">
                    <div className="useCaseContent gamingleftcontent domainSecLeft featurecontentleft">
                        <hr/>
                    </div>
                </div>


                <div className="uk-width-1-2@m uk-width-1-1@s">
                        <div className="uk-card uk-card-body priceCard2">
                            <div className="PriceCardContent2">
                                <h3 className="uk-card-title">Block Storage</h3>
                                <p className="uk-card-para">Attach additional SSD-based Block Storage to your Atoms for your needs starting from $0.10/GB per month.</p>
                            </div>
                        </div>
                    </div>


                    <div className="uk-width-1-2@m uk-width-1-1@s">
                        <div className="uk-card uk-card-body priceCard2">
                            <div className="PriceCardContent2">
                                <h3 className="uk-card-title">Backups</h3>
                                <p className="uk-card-para">Backups are charged at 20% of the price of your VM</p>
                            </div>
                        </div>
                    </div>

                    <div className="uk-width-1-2@m uk-width-1-1@s nomargin">
                        <div className="uk-card uk-card-body priceCard2">
                            <div className="PriceCardContent2">
                                <h3 className="uk-card-title">Snapshots</h3>
                                <p className="uk-card-para">Snapshots are charged at $0.05/GB per month. Your snapshot cost will change according to the size of the snapshot. </p>
                            </div>
                        </div>
                    </div>

                    <div className="uk-width-1-2@m uk-width-1-1@s nomargin">
                        <div className="uk-card uk-card-body priceCard2">
                            <div className="PriceCardContent2">
                                <h3 className="uk-card-title">Kubernetes</h3>
                                <p className="uk-card-para">A Kubernetes cluster pricing starts at $10/month</p>
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

export default PricingSecTwo;