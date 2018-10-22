import React, { Component } from 'react'
import TableCheck from './tablecheck'

//SETS UP THE ORDER TO BE SENT TO DB

class OrderDraft extends Component {
  state = {
    hasTable: false,
    table: 0,
    seats: [{Calamari: ["ds"]}],
    currentSelect: "dfsdf"
  }

  constructor(props) {
    super(props)
    this.changeState = this.changeState.bind(this)
    this.addDish = this.addDish.bind(this)
    this.punchOrder = this.punchOrder.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  changeState() {
    let tempState = this.state
    tempState.table = document.querySelector('#table').value
    this.setState(tempState)
    if(!this.state.hasTable)
      this.setState({hasTable:true})
  }

  addDish() {
    const curorder = this.state
    let dish = document.querySelector('#dish').value
    let requests = document.querySelector('#requests').value
    curorder.seats.push({[dish]: [requests]})
    this.setState(curorder)
    document.querySelector('#requests').value = ""
    document.querySelector('#dish').value =  this.props.dishes[0]
  }
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value })
  }

  punchOrder() {
    this.props.onAddOrder(this.state.seats, this.state.table)
  }

  render() {
    return (
      <TableCheck
        dish = {this.state.currentSelect}
        hasTable={this.state.hasTable}
        handleChange={this.handleChange}
        dishes={this.props.dishes}
        changeState={this.changeState}
        changeForm={this.changeForm}
        addDish={this.addDish}
        draft={this.state.seats}
        punchOrder={this.punchOrder}
      />
    )
  }
}

export default OrderDraft
