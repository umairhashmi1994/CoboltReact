import React from "react";
class ContainerReg extends React.Component {
    render() {
      const tableRef = React.createRef();
          return (
          <div>
              <section className="PriceSecTwoMain nomargin dotComputetoprightbotton">
              <div className="uk-container uk-container-expand containerCustom registryContainer">
                <div className="uk-grid-small" uk-grid="">
                    <div className="uk-width-1-1@m">
                        <div className="buildwithmain containerContent">
                            <hr/>
                            <h3>Container Registry</h3>
                        </div>
                    </div>
                    
                    <div className="uk-width-1-3@m uk-width-1-3@s nopadding">
                        
                        <div className="rowonetable">
                            <h6>Features</h6>
                            <p>Repositories</p>
                            <p>Storage 500NB</p>
                            <p>Storage overage</p>

                        </div>
                        </div>


                    <div className="uk-width-1-3@m uk-width-1-3@s nopadding ">
                        <div className="rowonetable">
                            <h6>Free</h6>
                            <p>1</p>
                            <p>500 MB</p>
                            <p>N/A</p>

                        </div>
                    </div>

                    <div className="uk-width-1-3@m uk-width-1-3@s nopadding ">
                        <div className="rowonetable">
                            <h6>Basic</h6>
                            <p>5</p>
                            <p>5GB</p>
                            <p>$0.02/GB</p>

                        </div>
                    </div>

                                {/* <th>Features</th>
                                <th>Free</th>
                                <th>Basic</th>
                            </tr>
                            <tr></tr>
                        </thead>
                        <tbody>
                        
                            <tr>
                                <td>Repositories</td>
                                <td>1</td>
                                <td>5</td>
                            </tr>
                       

                            <tr>
                                <td>Storage 500NB</td>
                                <td>500 MB</td>
                                <td>5GB</td>
                            </tr>

                            <tr>
                                <td>Storage overage</td>
                                <td>N/A</td>
                                <td>$0.02/GB</td>
                            </tr>
                            
                            
                        </tbody>
</table> */}

                    
                 </div>
            </div>
            </section>
          </div>
      )
    }
}
export default ContainerReg;