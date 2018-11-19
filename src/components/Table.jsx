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
        this.remove = this.remove.bind(this)
        this.addSeat = this.addSeat.bind(this)
    }

    addSeat() {
        this.state.seats.push({
            id: this.state.seats.length,
            orders: []
        })

        this.setState(this.state)
    }

    removeSeat(seatId) {
        this.setState(this.state.seats.filter((s => s.id === seatId)))
    }

    remove() {
        this.props.removeTable(this.props.id)
    }

    render() {
        return (
            <Grid container>
                <h2>Table {this.props.id}</h2>
                <Grid item xs={12}>
                    <Button onClick={this.addSeat}>Add Seat</Button>
                    <Button onClick={this.remove}>Remove table</Button>
                </Grid>
                <Grid item xs={12}>
                    <Grid container direction="row">
                        {this.props.seats.map((seat, index) => (
                            <Seat {...seat} key={index}/>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}