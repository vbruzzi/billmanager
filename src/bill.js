import React, { Component } from 'react'

class Bill extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <table>
        <thead>
          <tr>
            <th>Table</th>
            <th>Order</th>
            <th>Time Elapsed</th>
          </tr>
        </thead>
        <tbody>
          {this.props.orders.map((x, index) => (
            <tr key={index}>
              <td>{x.seats.map((y, index2) => (
                <div key={index2}>
                  {Object.keys(y)}
                  <ul>
                    {Object.values(y).map((z) => (
                      z.map((final, index3) => (
                        <li key={index3}>{final}</li>
                      ))
                    ))}
                  </ul>
                </div>
              ))}
            </td>
              <td>
                12:00
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default Bill
/*

*/
