import React from "react";
class Usecase extends React.Component {
    render() {
      
      return (
        <div>
            <section className="useCase circlrdesign">
        <div className="uk-container uk-container-expand containerCustom">
            <div className="" uk-grid="">
                <div className="uk-width-1-2@m uk-width-1-1@s">
                    <div className="useCaseContent">
                        <hr/>
                        <h3>Use Cases</h3>
                    </div>
                    <div className="" uk-grid="">
                    <div className="uk-width-1-2@l uk-width-1-1@s ">
                        <div className="useCasetext">
                            <h6>Website<br/> Hosting</h6>
                            <p>Unleash the full potential of your business by easily building reliable websites just the way you want to </p>
                        </div>
                    </div>
                    <div className="uk-width-1-2@l uk-width-1-1@s">
                        <div className="useCasetext">
                            <h6>Mobile Application<br/> Development</h6>
                            <p>Quickly and efficiently develop apps to reach your customers from any device </p>
                        </div>
                    </div>
                </div>
                </div>
                <div className="uk-width-1-2@m uk-width-1-2@s  uk-width-1-1@s">
                    <div className="useCaseImg">
                        <img src="images/sectionImages/usecase1.png"/>
                    </div>
                </div>


                <div className="uk-width-1-2@m uk-width-1-2@s">
                    <div className="">
                        <img src="images/feature.jpg"/>
                    </div>
                </div>
                <div className="uk-width-1-2@m uk-width-1-1@s">
                    <div className="" uk-grid="">
                    <div className="uk-width-1-2@l uk-width-1-1@s ">
                        <div className="useCasetext">
                            <h6>Gaming </h6>
                            <p>Develop global games with our simple and intuitive platform and scale as fast as you need </p>
                        </div>
                    </div>
                    <div className="uk-width-1-2@l uk-width-1-1@s">
                        <div className="useCasetext">
                            <h6>Startups</h6>
                            <p>Focus on setting up your business while we provide you with powerful building tools at a minimal cost </p>
                        </div>
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

export default Usecase;