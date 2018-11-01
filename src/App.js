import React, { Component } from 'react'
import OrderDraft from './orderdraft'
import DisplayBills from './displaybills'
import Grid from '@material-ui/core/Grid'

class App extends Component {
  state = {
    orders: [
      {
        table: 3,
        seats: [{Calamari: []}, {Pao: ["No butter"]}],
      }
    ],
    dishes: [
      {Fettucini: ["Chicken", "Fish", "GF"]},
      {Tacos: ["Beef", "Chicken", "Soy"]},
    ],
  }
  constructor() {
    super()
    this.onAddOrder = this.onAddOrder.bind(this)
  }
  onAddOrder (order, table) {
    const state = Object.assign({}, this.state)
    const newstate = {
      table: table,
      seats: order

  }
    state.orders.push(newstate)
    this.setState(state)
  }

  render() {
    return (
      <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="center">
        <OrderDraft
          onAddOrder={this.onAddOrder}
          dishes={this.state.dishes}
        />
      <DisplayBills orders={this.state.orders}/>
     </Grid>
    )
  }
}

export default App;
