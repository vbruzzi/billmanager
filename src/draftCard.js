import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import Input from '@material-ui/core/Input'
import ListItem from '@material-ui/core/ListItem'
import { Checkbox } from '@material-ui/core'

class DraftCard extends React.Component {
    constructor (props){
        super(props)
        this.dishName = Object.keys(this.props.dishName)
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }
    state = {

    }

    handleChange(event) {    //event is the checkbox
        const tempState = this.state
        if(event.target.checked) {
            if(tempState[this.dishName]) {
                tempState[this.dishName].push(event.target.value)
                console.log("ITS THIS BIH1")
            } else {
                tempState[this.dishName] = [event.target.value]
                console.log("ITS THIS BIH2")
            }
        } else {
            const index = this.state[this.dishName].indexOf(event.target.value)
            tempState[this.dishName].splice(index, 1)
        }
        this.setState(tempState)
        console.log(this.state, "CHANGE CARD TEST")
        console.log(this.props.test, "CHANGE PARENT TEST" )
    }

        

    handleAdd() {
        const tempState = this.state
        this.setState({})
        this.props.draftAdd(tempState)
        console.log(this.state, "CARD STATE")
    }
/* PUSH TEST */
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
                    <form
                      onSubmit= {(e) => {
                        e.preventDefault()
                        console.log(this.state, "final")
                      }}
                      >
                <CardContent>
                <List>
                    {Object.values(this.props.dishName).map((arr, index) => {
                        return (
                            <div
                                key={index}>
                                    {arr.map((option, ind) => {
                                        return (
                                            <ListItem
                                            onChange={(e) => this.handleChange(e)}
                                            key={ind}>
                                                <Checkbox
                                                value = {option}
                                                checked = {() => {
                                                    if(this.state[this.dishName].includes({option})) {
                                                        console.log("haro")
                                                        return
                                                    } else {
                                                        console.log("bu")
                                                        return
                                                    }
                                                }}/>
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
                  <Input
                    type="submit"
                    value="ADD"
                    onClick={() => this.handleAdd()}
                  />
                </CardActions>
                </form>
            </Card>
        )
    }

}

export default DraftCard
