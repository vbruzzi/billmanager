import React, {Component} from 'react'
import Grid from "@material-ui/core/Grid/Grid"
import {AddTable} from './AddTable'
import {Table} from './Table'


export class Tables extends Component {

    state = {
        id: null,
        seats: [

        ]
    }

    constructor(props) {
        super(props)
        this.openTable = this.openTable.bind(this)
        this.addSeat = this.addSeat.bind(this)
        this.removeSeat = this.removeSeat.bind(this)
        this.addTable = this.addTable.bind(this)
        this.addDishes = this.addDishes.bind(this);
    }

    openTable(table) {
        this.props.tables.map((x) => {
            if(x.id === table){
                this.setState(x)
                
        } else 
            this.setState({id: table, seats: []})
        })
    }
    
    addSeat(seatId) {
        this.state.seats.push({
            id: this.state.seats.length,
            dishes: []
        })
        this.setState(this.state)
    }
    
    removeSeat(seatId) {
        this.setState({seats: this.state.seats.filter(x => x.id !== seatId)})
    }

    addTable() {
        this.props.addTable(this.state)
        this.setState({id:null,seats:[]})
    }

    addDishes(dishes, seatId) {
        dishes.forEach(dish => this.state.seats.map((x) => {
            if(x.id === seatId) {
                x.dishes.push(dish.name)
            }
        })
        );
        this.setState(this.state);
    }

    render() {
        return (
            <Grid container>
                <Grid item xs={12}>
                    <AddTable openTable={this.openTable} tables={this.props.tableList}/>
                </Grid>
                <Grid item xs={12}>
                    {this.state.id ? 
                        <Table 
                        seats={this.state.seats}
                        id={this.state.id}
                        addSeat={this.addSeat}
                        removeSeat={this.removeSeat}
                        addTable={this.addTable}
                        addDishes={this.addDishes}
                        ></Table>: console.log("no")}
                    
                </Grid>
                <Grid item xs={12}>
                </Grid>
            </Grid>
        )
    }
}


/*
{this.state.tables.map((table, index) =>
                        <Table {...table} removeTable={this.removeTable} key={index}/>
                    )}


                    
                    <DisplayTables></DisplayTables>
                    */