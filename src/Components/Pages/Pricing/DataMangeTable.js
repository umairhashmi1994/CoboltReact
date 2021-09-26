import React from "react";
class DataManageTable extends React.Component {
    render() {
      const tableRef = React.createRef();
          return (
          <div>
              <section className="tableMain">
              <div className="uk-container uk-container-expand containerCustom">
                <div className="uk-grid-small " uk-grid="">
                <div className="uk-width-1-1@m">
                        <div className="buildwithmain managedata">
                            <hr/>
                            <h3>Managed Databases</h3>
                        </div>
                    </div>
                    <div className="uk-width-1-1@m">

                    <div className="uk-overflow-auto">
                    <table className="uk-table uk-table-small manageTable">
                        <thead>
                            <tr>
                                <th>Memory</th>
                                <th>vCPUs</th>
                                <th>SSD</th>
                                <th>Additonal Nodes</th>
                                <th>$/HR</th>
                                <th>$/MO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1GB</td>
                                <td>1vCPU</td>
                                <td>10GB</td>
                                <td>N/A</td>
                                <td>$0.02232</td>
                                <td>$15.00</td>
                            </tr>
                            
                            <tr>
                                <td>2GB</td>
                                <td>1vCPU</td>
                                <td>25GB</td>
                                <td>0</td>
                                <td>$0.04464</td>
                                <td>$30.00</td>
                            </tr>

                            <tr>
                                <td>2GB</td>
                                <td>1vCPU</td>
                                <td>25GB</td>
                                <td>1</td>
                                <td>$0.07440</td>
                                <td>$50.00</td>
                            </tr>

                            <tr>
                                <td>2GB</td>
                                <td>1vCPU</td>
                                <td>25GB</td>
                                <td>2</td>
                                <td>$0.10416</td>
                                <td>$70.00</td>
                            </tr>

                            <tr>
                                <td>4GB</td>
                                <td>2vCPU</td>
                                <td>38GB</td>
                                <td>0</td>
                                <td>$0.08929</td>
                                <td>$60.00</td>
                            </tr>


                            <tr>
                                <td>4GB</td>
                                <td>2vCPU</td>
                                <td>38GB</td>
                                <td>1</td>
                                <td>$0.14881</td>
                                <td>$100.00</td>
                            </tr>

                            <tr>
                                <td>4GB</td>
                                <td>2vCPU</td>
                                <td>38GB</td>
                                <td>2</td>
                                <td>$0.20833</td>
                                <td>$140.00</td>
                            </tr>

                            <tr>
                                <td>8GB</td>
                                <td>4vCPU</td>
                                <td>115GB</td>
                                <td>0</td>
                                <td>$0.17857</td>
                                <td>$120.00</td>
                            </tr>

                            <tr>
                                <td>8GB</td>
                                <td>4vCPU</td>
                                <td>115GB</td>
                                <td>1</td>
                                <td>$0.29762</td>
                                <td>$200.00</td>
                            </tr>

                            <tr>
                                <td>8GB</td>
                                <td>4vCPU</td>
                                <td>115GB</td>
                                <td>2</td>
                                <td>$0.41667</td>
                                <td>$280.00</td>
                            </tr>

                            <tr>
                                <td>16GB</td>
                                <td>6vCPU</td>
                                <td>270GB</td>
                                <td>0</td>
                                <td>$0.35714</td>
                                <td>$240.00</td>
                            </tr>

                            <tr>
                                <td>16GB</td>
                                <td>6vCPU</td>
                                <td>270GB</td>
                                <td>1</td>
                                <td>$0.59524</td>
                                <td>$400.00</td>
                            </tr>

                            <tr>
                                <td>16GB</td>
                                <td>6vCPU</td>
                                <td>270GB</td>
                                <td>2</td>
                                <td>$0.83334</td>
                                <td>$560.00</td>
                            </tr>

                            <tr>
                                <td>32GB</td>
                                <td>8vCPU</td>
                                <td>580GB</td>
                                <td>0</td>
                                <td>$0.71429</td>
                                <td>$480.00</td>
                            </tr>

                            <tr>
                                <td>32GB</td>
                                <td>8vCPU</td>
                                <td>580GB</td>
                                <td>1</td>
                                <td>$1.19048</td>
                                <td>$800.00</td>
                            </tr>

                            <tr>
                                <td>32GB</td>
                                <td>8vCPU</td>
                                <td>580GB</td>
                                <td>2</td>
                                <td>$1.66667</td>
                                <td>$1120.00</td>
                            </tr>
                            
                            <tr>
                                <td>64GB</td>
                                <td>16vCPU</td>
                                <td>1.12TB</td>
                                <td>1</td>
                                <td>$2.38095</td>
                                <td>$1600.00</td>
                            </tr>

                            <tr>
                                <td>16GB</td>
                                <td>2vCPU</td>
                                <td>4TB</td>
                                <td>25GB</td>
                                <td>$0.08929</td>
                                <td>$60.00</td>
                            </tr>
                        </tbody>
</table>
</div>
                    </div>
                 </div>
            </div>
            </section>
          </div>
      )
    }
}
export default DataManageTable;