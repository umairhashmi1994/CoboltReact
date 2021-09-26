import React from "react";
class SeeWho extends React.Component {
    render() {
      
      return (
        <div>
            <section className="seeWhomain">
        <div className="uk-container uk-container-expand containerCustom">
            <div className="" uk-grid="">
                <div className="uk-width-1-2@m uk-width-1-1@s ">
                    <div className="seewholeft">
                        <hr/>
                        <h1>See who builds <br/> with Cobolt</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae</p>
                        <a className="seewholeftbtn" href="#">Meet more client
                        <img src="/images/right.svg" uk-svg="" className="svgalign" />
                        </a>
                    </div>
                </div>
                <div className="uk-width-1-2@m uk-width-1-1@s">
                    <div className="seewhoright">
                        <img src="images/Group 30105.jpg"/>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </div>

      )
    }
}
export default SeeWho;