import React from "react";
class ObjectStorage extends React.Component {
    render() {
      const tableRef = React.createRef();
          return (
          <div>
              <section className="bgSecColor PriceSecTwoMain tableMain nomargin">
              <div className="uk-container uk-container-expand containerCustom">
                <div className="uk-grid-small uk-grid-match" uk-grid="" uk-height-match="target: > div > .objectStorage>h6"> 
                    <div className="uk-width-1-1@m">
                        <div className="buildwithmain containerContent">
                            <hr/>
                            <h3>Object Storage</h3>
                        </div>
                    </div>
                    
                    <div className="uk-width-1-5@m uk-width-1-2@s nopadding ">
                        
                        <div className="rowonetable objectStorage">
                            <h6>Storage</h6>
                            <p>250GB</p>
                        </div>
                        </div>


                    <div className="uk-width-1-5@m uk-width-1-2@s nopadding ">
                        <div className="rowonetable objectStorage">
                            <h6>Outbound Transfer</h6>
                            <p>1TB</p>
                        </div>
                    </div>

                    <div className="uk-width-1-5@m uk-width-1-2@s nopadding ">
                        <div className="rowonetable objectStorage">
                            <h6>Additional GB Stored</h6>
                            <p>$0.02/GB</p>
                        </div>
                    </div>

                    <div className="uk-width-1-5@m uk-width-1-2@s nopadding ">
                        <div className="rowonetable objectStorage">
                            <h6>Additional GB Transferred</h6>
                            <p>$0.01/GB</p>
                        </div>
                    </div>

                    <div className="uk-width-1-5@m uk-width-1-1@s nopadding ">
                        <div className="rowonetable objectStorage">
                            <h6>$/MO</h6>
                            <p>$5</p>
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
export default ObjectStorage;