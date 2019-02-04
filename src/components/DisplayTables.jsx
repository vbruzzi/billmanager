import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'

export class DisplayTables extends Component {

  constructor(props) {
    super(props)
    this.removeTable = this.removeTable.bind(this)
}

  removeTable(id) {
    this.props.removeTable(id)
  }
  render(){
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Table</TableCell>
            <TableCell>Order</TableCell>
            <TableCell> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.tables.map((x, index) => (
            <TableRow key={index}>
              <TableCell>{x.id}</TableCell>
              <TableCell>{x.seats.map((y, index2) => (
                <div key={index2}>
                S{y.id}
                  <ul>
                  {y.dishes.map((dish) => <li>{dish}</li> )}
                  </ul>
                </div>
              ))}
            </TableCell>
            <TableCell>
              <Button onClick={() => this.removeTable(x.id)}>READY</Button>
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
}

