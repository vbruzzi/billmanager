import React, {Component} from 'react'
import {Main} from './components/Main'

class App extends Component {
    state = {
        dishes: [
            {
                id: "Fettucini"
            },
            {
                id: "Tacos"
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
            <Main tableList={this.state.tables}/>    
        )
    }
}
export default App;
                                                                                                      