import React from "react";
class BuildWith extends React.Component {
    render() {
      
      return (
            <div>
            <section className="buildwith">
            <div className="uk-container uk-container-expand containerCustom">
                <div className="uk-grid-medium" uk-grid="">
                    <div className="uk-width-1-1@m">
                        <div className="buildwithmain">
                            <hr/>
                            <h3>Build with us </h3>
                            <h1>Build with us</h1>
                        </div>
                    </div>
                <div className="uk-width-3-5@m uk-width-3-5@s marginminus">
                    <div className="uk-grid-small mb-40" uk-grid="">
                        <div className="uk-width-1-2@m">
                            <div className="uk-card uk-card-body cardbgcolor">
                                <div className="card-img cardImage">
                                    <span>
                                        <img src="/images/sectionImages/kubernetes.png"/>
                                    </span>
                                </div>
                                <div className="card-content">
                                    <h3 className="uk-card-title">Kubernetes</h3>
                                    <p>Automated container deployment, scaling & management  for your apllicaiton</p>
                                </div>
                            </div>
                        </div>

                        <div className="uk-width-1-2@m customcardsize ">
                            <div className="uk-card uk-card-body cardbgcolor">
                                <div className="card-img cardImage">
                                    <span>
                                        <img src="images/sectionImages/Group 10729.png"/>
                                    </span>
                                </div>
                                <div className="card-content">
                                    <h3 className="uk-card-title">Monitoring & Alerts</h3>
                                    <p>View your resource and network stats in real time and receive alerts</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="uk-grid-small mt-10" uk-grid="" >
                        <div className="uk-width-1-2@m customcardsize ">
                            <div className="uk-card uk-card-body cardbgcolor">
                                <div className="card-img cardImage">
                                    <span>
                                        <img src="images/sectionImages/ssd.png"/>
                                    </span>
                                </div>
                                <div className="card-content">
                                    <h3 className="uk-card-title">Team Management</h3>
                                    <p>Invite and collaborate on projects with multiple along with the ability to assign roles and usage rights</p>
                                </div>
                            </div>
                        </div>
                        <div className="uk-width-1-2@m customcardsize ">
                            <div className="uk-card uk-card-body cardbgcolor">
                                <div className="card-img cardImage">
                                    <span>
                                        <img src="images/sectionImages/team management.png"/>
                                    </span>
                                </div>
                                <div className="card-content">
                                    <h3 className="uk-card-title">SSD Storage</h3>
                                    <p>Accelerate your application with powerful SSDs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="uk-width-2-5@m uk-width-2-5@s marginminus">
                    <div className="buildwithleftimg">
                        <img src="images/sectionImages/Kubernepart.png"/>
                    </div>
                </div>
                </div>
            </div>
            </section>
            </div>
        )
    }
}

export default BuildWith;