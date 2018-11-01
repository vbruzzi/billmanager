import React, { Component } from 'react'
import TableCheck from './tablecheck'

//SETS UP THE ORDER TO BE SENT TO DB

class OrderDraft extends Component {
  state = {
    hasTable: false,
    table: 0,
    seats: [{Calamari: ["ds"]}],
  }



  render() {
    return (
      <TableCheck
      dishes={this.props.dishes}
      />
    )
  }
}

export default OrderDraft


/*
  addDish() {
    const curorder = this.state
    let dish = document.querySelector('#dish').value
    let requests = document.querySelector('#requests').value
    curorder.seats.push({[dish]: [requests]})
    this.setState(curorder)
    document.querySelector('#requests').value = ""
    document.querySelector('#dish').value =  this.props.dishes[0]
  }

  punchOrder() {
    this.props.onAddOrder(this.state.seats, this.state.table)
  }
  */