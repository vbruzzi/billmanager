import React, { Component } from 'react'
import OrderDraft from './orderdraft'
import DisplayBills from './displaybills'

class App extends Component {
  state = {
    orders: [
      {
        table: 3,
        seats: [{Calamari: []}, {Pao: ["No butter"]}],
      }
    ],
    dishes: ["Croissant", "Bacon", "Soup"],
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
  console.log(table)
  console.log(newstate)
  console.log(this.state)
    state.orders.push(newstate)
    this.setState(state)
  }

  render() {
    return (
      <div>
        <OrderDraft
          onAddOrder={this.onAddOrder}
          dishes={this.state.dishes}
        />
      <DisplayBills orders={this.state.orders}/>
    </div>
    )
  }
}

export default App;
