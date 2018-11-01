import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { withTheme } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { Checkbox } from '@material-ui/core';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#A9A9A9',
    }
  },
});

class TableCheck extends React.Component {
  state = {
    hasTable: false,
    table: "",
    seats: [],
  }
  constructor(props) {
    super(props)
    this.changeTable = this.changeTable.bind(this)
    this.addOrder = this.addOrder.bind(this)
  }

  changeTable(event) {
    this.setState({table: event.target.value})
  }
  addOrder(tempDish) {
    const tempState = this.state
    tempState.seats.push(tempDish)
    this.setState(tempState)
    console.log(this.state)

  }
  render() {
    if(this.state.hasTable === false) {
      return(

        <form
          onSubmit={(event) => {
            this.setState({hasTable: true})
            event.preventDefault()
            
          }
          }>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >  
            <TextField
              id="outlined-number"
              type="number"
              variant="outlined"
              value={this.state.table}
              onChange={this.changeTable}
            />
            <Button 
            type="submit">ADD</Button>
          </Grid>
        </form>
     )
    } else {
      return (
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
        {this.props.dishes.map((dish, index) => {
          const dishName = Object.keys(dish)
          let tempDish = {[dishName]: []}
          return (
            <Card>
            <CardContent>
              <Typography 
                variant="h5" 
                component="h2"
                key={index}  
              >
                {dishName}
              </Typography>
            </CardContent>
            <CardContent>
              <List>
                {Object.values(dish).map((arr) => {
                  return (
                    <div>
                  {arr.map((option, ind) => {
                    return (
                      <ListItem>
                        <Checkbox
                        
                        id={option}
                        onChange={() => {tempDish[dishName].push(option)
                          console.log(tempDish)}}/>
                        {option}
                      </ListItem>
                    )
                  })}
                  </div>
                  )
                })}
              </List>
            </CardContent>
            <CardActions>
              <button
              onClick={() => this.addOrder(tempDish)}
              >
              ADD</button>
            </CardActions>
          </Card>
          )
        })}
        </Grid>
      )
    }
  }
}

  export default withTheme(theme)(TableCheck);


  /*

  <div>
          <label>
            <Select value={props.currentSelect} id="dish" onChange={props.handleChange}>
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
          </Bu666jjton>
        </div>





  */