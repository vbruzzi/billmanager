import React, {Component} from 'react'
import {Tables} from './Tables'
import {DisplayTables} from './DisplayTables'

export class Main extends Component {
    state = {
        tables: [
            {
                id: 1,
                seats: [
                    {   
                        id: 0,
                        dishes: ["Fettucini", "Tacos"]
                    }
                ]
            }
        ]
    }

    constructor(props) {
        super(props)
        this.addTable = this.addTable.bind(this)
        this.removeTable = this.removeTable.bind(this)
    }

    addTable(table) {
        this.state.tables.push({...table})
        this.setState(this.state)
        console.log(this.state)
    }    

    removeTable(table) {
        this.setState({tables: this.state.tables.filter(x =>  x.id !== table)})
    }

    render() {
        return (
            <div>
                <DisplayTables
                    tables={this.state.tables}
                    removeTable={this.removeTable}
                />
                
                <Tables 
                    addTable={this.addTable} 
                    tableList={this.props.tableList} 
                    tables={this.state.tables}
                />
            </div>
        )
    }  
}