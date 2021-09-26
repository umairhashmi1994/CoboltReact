import React from "react";
class FloatingIp extends React.Component {
    render() {
      const tableRef = React.createRef();
          return (
          <div>
              <section className="nomargin linebotom flotingIP">
              <div className="uk-container uk-container-expand containerCustom">
                <div className="uk-grid-small" uk-grid="" uk-height-match="target: > div > .loadbalance > p"> 
                    <div className="uk-width-1-1@m">
                        <div className="buildwithmain containerContent">
                            <hr/>
                            <h3>Floating IPs</h3>
                            <a className="priceFloatingIp" href="#">Floating IP’s are charged at $0.00595 per hour</a>
                        </div>
                    </div>
                    </div>    
            </div>
            </section>
          </div>
      )
    }
}
export default FloatingIp;