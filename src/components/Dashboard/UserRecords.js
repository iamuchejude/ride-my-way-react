import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ridesfull table-responsive table-stripped table-hover">
        <div className="column-header clear">
          <h3>My rides</h3>
        </div>
        <div className="table-responsive table-stripped table-hover">
          <table>
            <thead>
              <tr>
                <th>SN</th>
                <th>
                  Start From
                  <a href="#"><i className="lnr lnr-sort-amount-asc"></i></a>
                </th>
                <th>
                  Destination
                  <a href="#"><i className="lnr lnr-sort-amount-asc"></i></a>
                </th>
                <th>
                  Date
                  <a href="#"><i className="lnr lnr-sort-amount-asc"></i></a>
                </th>
                <th>
                  Time
                  <a href="#"><i className="lnr lnr-sort-amount-asc"></i></a>
                </th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Iyana Ipaja</td>
                <td>Ikeja Along</td>
                <td>24/10/2018</td>
                <td>10:20:00PM</td>
                <td>
                  <button className="btn btn-small btn-rounded btn-secondary"><i className="lnr lnr-exit-up"></i> Offered</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Iyana Ipaja</td>
                <td>Ikeja Along</td>
                <td>24/10/2018</td>
                <td>10:20:00PM</td>
                <td>
                  <button className="btn btn-small btn-rounded btn-secondary"><i className="lnr lnr-enter-down"></i> Offered</button>
                </td>
              </tr>
            </tbody>

            <tfoot>
              <tr>
                <td>SN</td>
                <td>Start From</td>
                <td>Destination</td>
                <td>Date</td>
                <td>Time</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

export default connect()(UserProfile);
