import React from 'react'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'




class DisplayDraft extends React.Component {
    render() {
        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Order</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.orderDraft.map((x, index) => {
                        return (
                            <TableRow>
                            <TableCell key={index}>{Object.keys(x)}
                                {Object.values(x).map((y, index2) => {
                                    return (
                                        <ul key={index2}>
                                            {y.map((z,ind) => {
                                                return(
                                                <li key={ind}>{z}</li>
                                                )
                                            })}
                                        </ul>
                                    )
                                })}
                            </TableCell>
                            </TableRow>
                        )
                        })}
                    </TableBody>
                </Table>
                <Button onClick={this.props.punchOrder}>
                ADD
                </Button>
            </div>
        )
    }
}

export default DisplayDraft