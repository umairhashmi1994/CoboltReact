import React from "react";

class SupportSecTwo extends React.Component {
    render() {
      return (
        <div>
            <section className="SupportSecMain linebotom"> 
            <div className="supportBottompad">
                <div className="uk-container uk-container-expand containerCustom">
                <div className="uk-grid-large" uk-grid=""  uk-height-match="target: div > div > .SupportList > ul">

                <div className="uk-width-1-3@m equalheight">
                        <div className="supportCardMain">
                            <div className="card-heading support-card-heading">
                                <h5>BASIC</h5>
                                {/* <hr/> */}
                            </div>


                            <div className="SupportList">
                                <hr/>

                            <ul className="uk-list">
                                <li className="supportListBottom">
                                    <p className="CardContent">
                                        <img src="/images/check_white_24dp.svg" uk-svg=""/>
                                        <span>-24/7 ticket support</span>
                                    </p>
                                </li>

                                <li className="supportListBottom">
                                    <p className="CardContent">
                                        <img src="/images/check_white_24dp.svg" uk-svg=""/>
                                        <span>-Product docs and tutorials</span>
                                    </p>
                                </li>

                                <li className="supportListBottom">
                                    <p className="CardContent">
                                        <img src="/images/check_white_24dp.svg" uk-svg=""/>
                                        <span>- API docs</span>
                                    </p>
                                </li>

                                <li className="supportListBottom">
                                    <p className="CardContent">
                                        <img src="/images/check_white_24dp.svg" uk-svg=""/>
                                        <span>-Community Q&A</span>
                                    </p>
                                </li>
                            </ul>

                            <hr/>
                            <div className="bottomHeading">
                                <h5>Free</h5>
                            </div>
                            </div>
                        </div>
                </div>


                <div className="uk-width-1-3@m equalheight">
                        <div className="supportCardMain">
                            <div className="card-heading blue-support-card-heading">
                                <h5>BUSINESS</h5>
                                {/* <hr/> */}
                            </div>


                            <div className="SupportList">
                                <hr/>

                            <ul className="uk-list">
                                <li className="supportListBottom">
                                    <p className="CardContent">
                                        <img src="/images/check_white_24dp.svg" uk-svg=""/>
                                        <span>-Technical infrastructure support</span>
                                    </p>
                                </li>

                                <li className="supportListBottom">
                                    <p className="CardContent">
                                        <img src="/images/check_white_24dp.svg" uk-svg=""/>
                                        <span> -Best-effort 3rd-party software support</span>
                                    </p>
                                </li>

                                <li className="supportListBottom">
                                    <p className="CardContent">
                                        <img src="/images/check_white_24dp.svg" uk-svg=""/>
                                        <span>-Access to a team of  Customer Success Managers</span>
                                    </p>
                                </li>
                            </ul>

                            <hr/>
                            <div className="bottomHeading">
                                <h5>Free for billing over $500</h5>
                            </div>
                            </div>
                        </div>
                </div>


                <div className="uk-width-1-3@m equalheight">
                        <div className="supportCardMain">
                            <div className="card-heading yellow-support-card-heading">
                                <h5>PREMIER</h5>
                                {/* <hr/> */}
                            </div>


                            <div className="SupportList">
                                <hr/>

                            <ul className="uk-list">
                                <li className="supportListBottom">
                                    <p className="CardContent">
                                        <img src="/images/check_white_24dp.svg" uk-svg=""/>
                                        <span>-Live support</span>
                                    </p>
                                </li>

                                <li className="supportListBottom">
                                    <p className="CardContent">
                                        <img src="/images/check_white_24dp.svg" uk-svg=""/>
                                        <span> -30-minute response times</span>
                                    </p>
                                </li>

                                <li className="supportListBottom">
                                    <p className="CardContent">
                                        <img src="/images/check_white_24dp.svg" uk-svg=""/>
                                        <span> -Dedicated Customer Success Manager</span>
                                    </p>
                                </li>

                                <li className="supportListBottom">
                                    <p className="CardContent">
                                        <img src="/images/check_white_24dp.svg" uk-svg=""/>
                                        <span> -Solutions engineering to perfect your architecture</span>
                                    </p>
                                </li>
                            </ul>

                            
                            <div className="bottomHeading hrtop">
                                {/* <h5></h5> */}
                                <hr/>
                            </div>
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

export default SupportSecTwo;
