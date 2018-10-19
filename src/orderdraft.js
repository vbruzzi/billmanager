import React, { Component } from 'react'
import TableCheck from './tablecheck'

//SETS UP THE ORDER

class OrderDraft extends Component {
  state = {
    hasTable: false,
    table: 0,
    seats: [{Calamari: "ds"}]
  }
//nothing
  constructor(props) {
    super(props)
    this.changeState = this.changeState.bind(this)
    this.addDish = this.addDish.bind(this)
  }

  changeState() {
    this.state.table = document.querySelector('#table').value
    if(!this.state.hasTable)
      this.setState({hasTable:true})
  }

  addDish() {
    let dish = document.querySelector('#dish').value
    let requests = document.querySelector('#requests').value
    const curorder = this.state
    curorder.seats.push({[dish]: requests})
    this.setState(curorder)
    document.querySelector('#requests').value = ""
    document.querySelector('#dish').value =  this.props.dishes[0]
  }

  render() {
    return (
      <TableCheck
        hasTable={this.state.hasTable}
        dishes={this.props.dishes}
        changeState={this.changeState}
        changeForm={this.changeForm}
        addDish={this.addDish}
        draft={this.state.seats}
      />
    )
  }
}

export default OrderDraft
