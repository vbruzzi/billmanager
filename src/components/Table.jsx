import React, {Component} from 'react'
import Grid from "@material-ui/core/Grid/Grid"
import {Seat} from './Seat'
import Button from "@material-ui/core/Button/Button"

export class Table extends Component {

    state = {
        id: null,
        seats: []
    }

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id,
            seats: this.props.seats
        }
        this.addSeat = this.addSeat.bind(this)
    }

    addSeat() {
        this.props.addSeat(this.state.id)
    }
   

    render() {
        return (
            <Grid container>
                <h2>Table {this.props.id}</h2>
                <Grid item xs={12}>
                    <Button onClick={this.addSeat}>Add Seat</Button>
                    <Button onClick={this.props.addTable}>Add Table</Button>
                </Grid>
                <Grid item xs={12}>
                    <Grid container direction="row">
                        {this.props.seats.map((seat, index) => (
                            <Seat 
                            addDishes={this.props.addDishes}
                            {...seat} 
                            key={index} 
                            removeSeat={this.props.removeSeat} />
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}