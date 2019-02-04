import React, {Component} from 'react'
import Grid from "@material-ui/core/Grid/Grid"
import Button from "@material-ui/core/Button/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import AddIcon from '@material-ui/icons/Add'

const style = {
    backgroundcolor: 'lightBlue',
    color: '#fff',
    position: 'fixed',
    bottom: 0,
    right: 0,
    margin: '10px',
}

export class AddTable extends Component {

    state = {
        value: "",
        open: false
    }

    constructor(props) {
        super(props)
        this.add = this.add.bind(this)
        this.changeTable = this.changeTable.bind(this)
    }

    add() {
        if (this.props.openTable) {
            this.props.openTable(this.state.value);
            this.setState({value: ""})
        }
    }

    changeTable(e) {
        this.setState({value: e}, this.add)
        this.setState({open: false})
        this.props.openTable(e)
    } 
    
    handleClickOpen = () => {
        this.setState({ open: true })
    }


    

    render() {
        return (
            <Grid container>
                <Grid item xs={12} style={style}>
                    <Button variant="fab" Icon onClick={this.handleClickOpen} style={style}>
                        <AddIcon />
                    </Button>
                    <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="alert-dialog-title">
                        <DialogTitle id="alert-dialog-title">Choose a table:</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                            {this.props.tables.map((table, index) => 
                                <Button key={index} onClick={() => {this.changeTable(table);}}>{table}</Button>
                            )}
                            </DialogContentText>    
                        </DialogContent>
                    </Dialog>
                </Grid>
            </Grid>
        )
    }
}