import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid/Grid";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

export class DishSelector extends Component {

    state = {
        open: false,
        checked: [],
        dishes: [
            {
                name: 'Fettucini',
                variations: ["Chicken", "Fish", "GF"]
            },
            {
                name: 'Tacos',
                variations: ["Beef", "Chicken", "Soy"]
            }
        ],
    };

    constructor(props) {
        super(props);
        this.open = this.open.bind(this);
        this.addDishes = this.addDishes.bind(this);
    }

    addDishes() {
        this.props.addDishes(
            this.state.dishes.filter(dish => this.state.checked.indexOf(dish.name) > -1)
        );
        this.setState({open: false})
    }

    open() {
        this.setState({open: true, checked: []});
    }

    handleToggle = value => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    };

    render() {
        return (
            <Grid container>
                <Grid item xs={12}>
                    <Button onClick={this.open}>Add To order</Button>
                </Grid>
                <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={this.state.open}>
                    <DialogTitle id="simple-dialog-title">Choose Dish</DialogTitle>
                    <div>
                        <List component="nav">
                            {this.state.dishes.length && this.state.dishes.map((dish, index) =>
                                <ListItem button key={index} onClick={this.handleToggle(dish.name)}>
                                    <Checkbox
                                        checked={this.state.checked.indexOf(dish.name) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                    />
                                    <ListItemText primary={dish.name} />
                                </ListItem>
                            )}
                        </List>
                    </div>
                    <DialogActions>
                        <Button onClick={this.addDishes} color="primary">Add Dishes</Button>
                    </DialogActions>
                </Dialog>
            </Grid>
        )
    }
}