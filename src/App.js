import React, { Component } from 'react'
import OrderDraft from './orderdraft'
import DisplayBills from './displaybills'

class App extends Component {
  state = {
    orders: [
      {
        table: 3,
        seats: [{Calamari: []}, {Pao: ["No butter"]}],
      },
      {
        table: 0,
        seats: [{Calamari: []}, {Pao: ["No butter"]}],
      }
    ],
    dishes: ["Croissant", "Bacon", "Soup"],
  }
  constructor() {
    super()
    this.onAddOrder = this.onAddOrder.bind(this)
  }
  onAddOrder (order) {
    const state = Object.assign({}, this.state)
    state.orders.push(order)
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
