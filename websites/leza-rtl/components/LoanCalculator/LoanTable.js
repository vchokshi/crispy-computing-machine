import React from 'react';

const LoanTable = () => {
    return (
        <div className="table-area pb-100">
            <div className="container">
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Period</th>
                            <th>Balance</th>
                            <th>Pandle</th>
                            <th>Interest</th>
                            <th>Principle</th>
                          </tr>
                        </thead>
    
                        <tbody>
                            <tr>
                                <td>07/07/2020</td>
                                <td>0</td>
                                <td>$500.00</td>
                                <td>$0.00</td>
                                <td>$0.00</td>
                                <td>$0.00</td>
                            </tr>
                            <tr>
                                <td>08/07/2020</td>
                                <td>1</td>
                                <td>$459.28</td>
                                <td>$42.80</td>
                                <td> $2.08</td>
                                <td>$40.72</td>
                            </tr>
                            <tr>
                                <td>09/07/2020</td>
                                <td>2</td>
                                <td>$418.39</td>
                                <td>$42.00</td>
                                <td>$1.91</td>
                                <td>$40.89</td>
                            </tr>
                            <tr>
                                <td>10/07/2020</td>
                                <td>3</td>
                                <td>$377.33</td>
                                <td>$42.00</td>
                                <td>$1.74</td>
                                <td>$41.06</td>
                            </tr>
                            <tr>
                                <td>11/07/2020</td>
                                <td>4</td>
                                <td>$336.10</td>
                                <td>$42.00</td>
                                <td>$1.57</td>
                                <td>$41.23</td>
                            </tr>
                            <tr>
                                <td>12/07/2020</td>
                                <td>5</td>
                                <td>$294.67</td>
                                <td>$42.00</td>
                                <td>$1.40</td>
                                <td>$41.40</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default LoanTable;