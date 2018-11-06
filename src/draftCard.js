import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { Checkbox } from '@material-ui/core';

class DraftCard extends React.Component {
    constructor (props){
        super(props)
        this.dishName = Object.keys(this.props.dishName)
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }
    state = {

    }

    handleChange(event) {
        let tempState = this.state
        if(tempState[this.dishName]) {
            tempState[this.dishName].push(event.target.value)
        } else {
            tempState[this.dishName] = [event.target.value]
        }
        this.setState(tempState)
    }

    handleAdd() {
        if(this.state==={}) {
            const tempState = {}
            tempState[this.dishName] = []
            this.props.draftAdd(tempState)
        } else {
            this.props.draftAdd(this.state)
        }
    }

    render() {
        return (
            <Card>
                <CardContent>
                <Typography 
                    variant="h5" 
                    component="h2" 
                >
                    {this.dishName}
                </Typography>
                </CardContent>
                <CardContent>
                <List>
                    {Object.values(this.props.dishName).map((arr, index) => {
                    return (
                        <div
                        key={index}>
                    {arr.map((option, ind) => {
                        return (
                        <ListItem
                        key={ind}>
                            <Checkbox
                            value = {option}
                            id={option}
                            onChange={this.handleChange}/>
                            {option}
                        </ListItem>
                        )
                    })}
                    </div>
                    )
                    })}
                </List>
                </CardContent>
                <CardActions>
                <Button
                onClick={this.handleAdd}
                >
                ADD</Button>
                </CardActions>
            </Card>
        )
    }

}

export default DraftCard