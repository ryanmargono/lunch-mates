import React from 'react'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui'

const UserTable = (props) => {
    return (
        <Table>
            <TableHeader displaySelectAll ={false}>
                <TableRow>
                    <TableHeaderColumn >Names</TableHeaderColumn>
                    <TableHeaderColumn>Date</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
            </TableBody>
        </Table>
    )
}

export default UserTable