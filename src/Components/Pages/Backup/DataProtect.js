import React from "react";

class DataProtect extends React.Component {
    render() {
      return (
        <div>
            <section className="pricemain"> 
            <div className="mainfeature dotpattarntoprightbotton circlelinepatternbotton">
                <div className="uk-container uk-container-expand containerCustom">
                <div className="" uk-grid="">
                    <div className="uk-width-1-2@m uk-width-1-2@s" >
                        <div className="featurecontentleft">
                            <hr/>
                            <h1>Keep your data protected</h1>
                            <p className="pricePara">Pay only for how much you consume</p>
                            <p className="pricestart">Satrting <br/> from </p>
                            <p className="startprice">$5.00/month</p>
                        </div>
                    </div>
                <div className="uk-width-1-2@m uk-width-1-2@s uk-align-center nomargin">
                    <div className="priceimage">
                        <img src="/images/sectionImages/Group 10854.jpg"/>
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

export default DataProtect;
