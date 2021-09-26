import React from "react";
class PriceTable extends React.Component {
    render() {
      const tableRef = React.createRef();
          return (
          <div className="tableMain">
              <div className="uk-container uk-container-expand containerCustom">
                <div className="uk-grid-small " uk-grid="">
                    <div className="uk-width-1-1@m">
                    <div className="uk-overflow-auto">
                    <table className="uk-table uk-table-small">
                        <thead>
                            <tr>
                                <th>Memory</th>
                                <th>vCPUs</th>
                                <th>Transfer</th>
                                <th>SSD</th>
                                <th>$/HR</th>
                                <th>$/MO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1GB</td>
                                <td>1vCPU</td>
                                <td>1000 GB</td>
                                <td>25GB</td>
                                <td>$0.00744</td>
                                <td>$5.00</td>
                            </tr>
                            
                            <tr>
                                <td>2GB</td>
                                <td>vCPU</td>
                                <td>2 TB</td>
                                <td>50GB</td>
                                <td>$0.01488</td>
                                <td>$10.00</td>
                            </tr>

                            <tr>
                                <td>2GB</td>
                                <td>2vCPU</td>
                                <td>3 TB</td>
                                <td>60GB</td>
                                <td>$0.02232</td>
                                <td>$15.00</td>
                            </tr>

                            <tr>
                                <td>4GB</td>
                                <td>2vCPU</td>
                                <td>4 TB</td>
                                <td>80GB</td>
                                <td>$0.02976</td>
                                <td>$20.00</td>
                            </tr>

                            <tr>
                                <td>8GB</td>
                                <td>4vCPU</td>
                                <td>5 TB</td>
                                <td>160GB</td>
                                <td>$0.05952</td>
                                <td>$40.00</td>
                            </tr>


                            <tr>
                                <td>8GB</td>
                                <td>2vCPU</td>
                                <td>4 TB</td>
                                <td>25GB</td>
                                <td>$0.08929</td>
                                <td>$60.00</td>
                            </tr>

                            <tr>
                                <td>16GB</td>
                                <td>4vCPU</td>
                                <td>5TB</td>
                                <td>50GB</td>
                                <td>$0.17857</td>
                                <td>$120.00</td>
                            </tr>

                            <tr>
                                <td>32GB</td>
                                <td>8vCPU</td>
                                <td>6TB</td>
                                <td>100GB</td>
                                <td>$0.35714</td>
                                <td>$240.00</td>
                            </tr>

                            <tr>
                                <td>64GB</td>
                                <td>16vCPU</td>
                                <td>7TB</td>
                                <td>200GB</td>
                                <td>$0.71429</td>
                                <td>$480.00</td>
                            </tr>

                            <tr>
                                <td>128GB</td>
                                <td>32vCPU</td>
                                <td>8TB</td>
                                <td>400GB</td>
                                <td>$1.42857</td>
                                <td>$960.00</td>
                            </tr>

                            <tr>
                                <td>160GB</td>
                                <td>40vCPU</td>
                                <td>9TB</td>
                                <td>500GB</td>
                                <td>$1.78571</td>
                                <td>$1200.00</td>
                            </tr>
                        </tbody>
</table>
</div>

                    </div>
                 </div>
            </div>
          </div>
      )
    }
}
export default PriceTable;