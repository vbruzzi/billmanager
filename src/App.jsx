import React, {Component} from 'react'
import {Tables} from './components/Tables'

class App extends Component {
    state = {
        dishes: [
            {
                id: "Fettucini",
                options: ["Chicken", "Fish", "GF"]
            },
            {
                id: "Tacos",
                variations: ["Beef", "Chicken", "Soy"]
            },
        ],
        tables: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };

    constructor(props) {
        super(props)
        this.onAddOrder = this.onAddOrder.bind(this)
    }

    onAddOrder(order, table) {
        this.state.orders.push({
            table: table,
            seats: order

        })
        this.setState(this.state)
    }

    render() {
        return (
            <Tables tables={this.state.tables}/>
        )
    }
}

/*
<Grid
    container
    direction="column"
    justify="flex-start"
    alignItems="center">
    <OrderDraft onAddOrder={this.onAddOrder} dishes={this.state.dishes}/>
    <DisplayBills orders={this.state.orders}/>
</Grid>
 */

export default App;
                                                                                                      