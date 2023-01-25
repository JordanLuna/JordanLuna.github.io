import React, { Component } from "react";

export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Scott",
        phone: "865-8522",
        address: { city: "New York" },
      },
      { id: 2, name: "Jamie", phone: "123-4567", address: { city: "Sydney" } },
      { id: 3, name: "Sally", phone: "654-2566", address: { city: "Chicago" } },
      {
        id: 4,
        name: "Peter",
        phone: null,
        address: { city: "Amsterdam" },
      },
      {
        id: 5,
        name: "Jackie",
        phone: null,
        address: { city: "Beijing" },
      },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}
          <span>{this.state.customersCount}</span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((cust) => {
              return (
                <tr key={cust.id}>
                  <td>{cust.id}</td>
                  <td>{cust.name}</td>
                  <td>
                    {cust.phone ? (
                      cust.phone
                    ) : (
                      <div className="bg-warning p-2 text-center">
                        No Phone Number
                      </div>
                    )}
                  </td>
                  <td>{cust.address.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  //Executes when user clicks on Refrech button
  onRefreshClick = () => {
    this.setState({ customersCount: 7 });
  };
}
