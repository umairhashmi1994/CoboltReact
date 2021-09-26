import React from "react";
class WebSecOne extends React.Component {
    render() {
      
      return (
        <div>
        <section className="gaming">
        <div className="uk-container uk-container-expand containerCustom">
            <div className="" uk-grid="">
                <div className="uk-width-2-5@m uk-width-1-1@s">
                    <div className="useCaseContent gamingleftcontent">
                        <hr/>
                        <h4>Save costs without compromising on service</h4>
                        <p>Containers work by virtualizing at the OS level instead of the hardware stack as done with virtual machines. By decoupling and shifting your existing applications to containers providing you with a suitable environment, while consuming less resources compared to a traditional server or virtual machine. By having containers on Cobolt, your container applications can benefit from our secure systems and network. </p>
                    </div>
                </div>
                <div className="uk-width-3-5@m uk-width-1-2@s  uk-width-1-1@s">
                    <div className="gamingrightimg">
                        <img src="images/sectionImages/Group 10633.png"/>
                    </div>
                </div>


                <div className="uk-width-3-5@m uk-width-1-2@s  uk-width-1-1@s">
                    <div className="gamingleftimg mt15 ">
                        <img src="images/sectionImages/Group 10879.png"/>
                    </div>
                </div>
                <div className="uk-width-2-5@m uk-width-1-1@s">
                    <div className="useCaseContent gamingleftcontent mt24">
                        <h4>Accelerated and simplified app deployment </h4>
                        <p>Containers provide developers and applications with the environment that is needed for smooth deployment and operation. This saves time and results in increased productivity for IT teams as time is no longer wasted in creating and testing suitable environments upon each deployment. Containers can also virtually run across multiple operating systems such as Linux, Windows or Mac. </p>
                    </div>
                </div>
                
        </div>
        </div>
        </section>
        </div>
      )
    }
}

export default WebSecOne;