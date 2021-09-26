import React from "react";
class LoadBalance extends React.Component {
    render() {
      const tableRef = React.createRef();
          return (
          <div>
              <section className="PriceSecTwoMain nomargin">
              <div className="uk-container uk-container-expand containerCustom">
                <div className="uk-grid-small" uk-grid="" uk-height-match="target: > div > .loadbalance > p"> 
                    <div className="uk-width-1-1@m">
                        <div className="buildwithmain containerContent">
                            <hr/>
                            <h3>Load Balancers</h3>
                        </div>
                    </div>
                    
                    <div className="uk-width-1-4@m uk-width-1-4@s ">
                        <div className="loadbalance mobilecol1 center">
                            <p>Small</p>
                            <p>Medium</p>
                            <p>Large</p>
                        </div>
                    </div>

                    <div className="uk-width-1-2@m uk-width-1-2@s nopadding ">
                        <div className="loadbalance mobilecol2">
                            <p>For static websites and blogs with low to moderate traffic</p>
                            <p>For transaction-driven sites or services with moderate traffic</p>
                            <p>For busy sites, services, or endpoints where high performance is a must</p>
                        </div>
                    </div>


                    <div className="uk-width-1-4@m uk-width-1-4@s nopadding">
                        <div className="loadbalance center mobilecol3">
                            <p>$10/ month</p>
                            <p>$30/ month</p>
                            <p>$60/ month</p>
                        </div>
                    </div>
                 </div>
            </div>
            </section>
          </div>
      )
    }
}
export default LoadBalance;