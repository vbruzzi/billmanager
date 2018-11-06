import React from 'react'
import DraftCard from './draftCard'
import DisplayDraft from './displayDraft'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { withTheme } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

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
    this.draftAdd = this.draftAdd.bind(this)
  }

  changeTable(event) {
    this.setState({table: event.target.value})
  }
  draftAdd(tempDish) {
    console.log(this.state)
    console.log(tempDish)
    const tempState = this.state
    tempState.seats.push(tempDish)
    console.log(tempState)
    this.setState(tempState)

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
        <div>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
          {this.props.dishes.map((dish, index) => {
            return (
              <DraftCard
              key={index}
              dishName = {dish}
              draftAdd={this.draftAdd}
              />
            )
          })}
          </Grid>
          <DisplayDraft
            orderDraft={this.state.seats}
          />
        </div>
      )
    }
  }
}

  export default withTheme(theme)(TableCheck)