import React, {Component} from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import {DishSelector} from './DishSelector'

import Icon from '@material-ui/icons/Close'

export class Seat extends Component {

    state = {
        id: undefined,
        dishes: []
    }

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id,
            dishes: this.props.dishes || []
        }
        this.removeSeat = this.removeSeat.bind(this);
        this.addDishes = this.addDishes.bind(this);
    }


    addDishes(dishes, id) {
        this.props.addDishes(dishes, id)
    }



    removeSeat() {
        this.props.removeSeat(this.state.id);
    }
    render() {
        return (
            <Card>
                
                <CardContent>
                    <CardHeader
                        title={
                            <Typography color="textSecondary" gutterBottom>
                                Seat {this.props.id}
                            </Typography>
                        }
                        action={
                            <Icon onClick={this.removeSeat}>
                                Close
                            </Icon>
                        }
                        />
                    <div>
                        <List component="nav">
                            {this.state.dishes.length > 0 && this.state.dishes.map((dish, index) =>
                                <ListItem button key={index}>
                                    <ListItemText primary={dish} />
                                </ListItem>
                            )}
                            {this.state.dishes.length <= 0 && (
                                <Typography color="textSecondary" gutterBottom>Click Add to Order to choose dishes</Typography>
                            )}
                        </List>
                    </div>
                    <CardActions>
                        <DishSelector id={this.state.id} addDishes={this.addDishes}/>
                    </CardActions>
                </CardContent>
            </Card>
        )
    }
}



/*{this.props.dishes.map((dish, index) => 
                            <Button key={index}>{dish.id}</Button>
                        )}

                        */