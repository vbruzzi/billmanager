import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

//SETS UP THE DISPLAY FOR EXISTING ORDERS 

class DisplayBill extends Component {
 
  render(){
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Table</TableCell>
            <TableCell>Order</TableCell>
            <TableCell>Time Elapsed</TableCell>
            <TableCell>Time Elapsed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         { /* maps through the orders */ }
          {this.props.orders.map((x, index) => (
            <TableRow key={index}>
              <TableCell>
              { /* maps through the seats in each order */ }
                {x.seats.map((y, index2) => (
                  <div key={index2}>
                    {Object.keys(y)}
                    <ul>
                    { /* maps through requests for each seat */ }
                    {Object.values(y).map((z) => (
                      z.map((final, index3) => (
                        <li key={index3}>{final}</li>
                      ))
                    ))}
                  </ul>
                </div>
              ))}
            </TableCell>
              <TableCell>
                12:00
              </TableCell>
              <TableCell>
              <Button onClick={this.removeOrder}>
              REMOVE
              </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
}

export default DisplayBill
/*

*/
