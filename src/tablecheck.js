import React from 'react'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Input from '@material-ui/core/Input'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

//SETS INPUT FORM TO BUILD ORDER DRAFT 

const styles = theme => ({
  table: {
    maxWidth: 600,
  }

})


function TableCheck(props) {
    if (props.hasTable === true) {
      return (
        <div>
          <label>
            <Select value={props.dish} id="dish" onChange={props.handleChange}>
              {props.dishes.map((dish) => {
                return <MenuItem key={dish} value={dish}>{dish}</MenuItem>
              })}
            </Select>
          </label>
          <Input id="requests" type="text">
          </Input>
          <Button onClick={props.addDish}>ADD</Button>
          <Table>
            <TableHead>
              <TableRow>
               <TableCell>Order</TableCell>
             </TableRow>
            </TableHead>
            <TableBody>
              {props.draft.map((x, index) => {
                return (
                  <TableRow>
                    <TableCell key={index}>{Object.keys(x)}
                      <ul>
                        {Object.values(x).map((y, index2) => (
                          <li key={index2}>{y}</li>
                        ))}
                      </ul>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
          <Button onClick={props.punchOrder}>
            ADD
          </Button>
        </div>
      )
    } else {
      return(
        <div>
          <input
            id="table"
            type="number"
          />
          <Button onClick={props.changeState}>ADD</Button>
        </div>
      )
    }
  }

  export default withStyles(styles)(TableCheck);