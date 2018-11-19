import React, {Component} from 'react'
import Grid from "@material-ui/core/Grid/Grid"
import {AddTable} from './AddTable'
import {Table} from './Table'


export class Tables extends Component {

    state = {
        tables: localStorage.getItem('tables') || []
    }

    constructor(props) {
        super(props)
        this.addTable = this.addTable.bind(this)
        this.removeTable = this.removeTable.bind(this)
    }

    addTable(table) {
        this.state.tables.push({
            id: table,
            seats: []
        })
        this.setState(this.state)
    }

    removeTable(tableId) {
        this.setState({tables: this.state.tables.filter((t => t.id !== tableId))})
    }

    render() {
        return (
            <Grid container>
                <Grid item xs={12}>
                    <AddTable addTable={this.addTable} tables={this.props.tables}/>
                </Grid>
                <Grid item xs={12}>
                    {this.state.tables.map((table, index) =>
                        <Table {...table} removeTable={this.removeTable} key={index}/>
                    )}
                </Grid>
            </Grid>
        )
    }
}