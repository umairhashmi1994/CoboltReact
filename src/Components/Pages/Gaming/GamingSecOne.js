import React from "react";
class GamingSecOne extends React.Component {
    render() {
      
      return (
        <div>
        <section className="gaming">
        <div className="uk-container uk-container-expand containerCustom">
            <div className="" uk-grid="">
                <div className="uk-width-2-5@m uk-width-1-1@s">
                    <div className="useCaseContent gamingleftcontent">
                        <hr/>
                        <h4>Empowering game developers</h4>
                        <p>Reduce the time required for building and testing using managed services designed especially for game workloads. Deploy new features faster, and scale your capacity to meet player demand as needed.</p>
                            <br/>
                        <p> Using Cobolt’s infrastructure, developers have the luxury to pay only for the resources used rather than a complete upfront investment. </p>
                    </div>
                </div>
                <div className="uk-width-3-5@m uk-width-1-2@s  uk-width-1-1@s">
                    <div className="gamingrightimg">
                        <img src="images/sectionImages/Group 7129.png"/>
                    </div>
                </div>


                <div className="uk-width-3-5@m uk-width-1-2@s  uk-width-1-1@s">
                    <div className="gamingleftimg mt15 ">
                        <img src="images/sectionImages/Group 7085.png"/>
                    </div>
                </div>
                <div className="uk-width-2-5@m uk-width-1-1@s">
                    <div className="useCaseContent gamingleftcontent mt24">
                        <h4>Safe and secure environment for development </h4>
                        <p>Cyber security is highly essential to protect your player and game data. Cobolt ensures compliance while ensuring it doesn’t hinder the agility of your game. Benefit from high availability and low costs without having to worry about the security of your game and players. </p>
                    </div>
                </div>
                
        </div>
        </div>
        </section>
        </div>
      )
    }
}

export default GamingSecOne;