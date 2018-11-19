import React, {Component} from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import {DishSelector} from './DishSelector'

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
        this.addDishes = this.addDishes.bind(this);
    }

    addDishes(dishes) {
        dishes.forEach(dish => this.state.dishes.push(dish))
        this.setState(this.state)
    }

    render() {
        return (
            <Card>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Seat {this.props.id}
                    </Typography>
                    <div>
                        <List component="nav">
                            {this.state.dishes.length > 0 && this.state.dishes.map((dish, index) =>
                                <ListItem button key={index}>
                                    <ListItemText primary={dish.name} />
                                </ListItem>
                            )}
                            {this.state.dishes.length <= 0 && (
                                <Typography color="textSecondary" gutterBottom>Click Add to Order to choose dishes</Typography>
                            )}
                        </List>
                    </div>
                    <CardActions>
                        <DishSelector addDishes={this.addDishes}/>
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