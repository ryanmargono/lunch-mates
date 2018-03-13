import React from 'react'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui'
import { connect } from 'react-redux'
import EditUserDialogue from './EditUserDialogue'


const UserTable = (props) => {
    return (
        <Table style={{ paddingTop: 20 }} >
            <TableHeader displaySelectAll={false}>
                <TableRow>
                    <TableHeaderColumn >Name</TableHeaderColumn>
                    <TableHeaderColumn>Department</TableHeaderColumn>
                    <TableHeaderColumn>Edit / Delete</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
                { props.users && props.users.map(user => {
                    return (
                        <TableRow key={`${user.name}_${user.department}`} >
                            <TableRowColumn> { user.name } </TableRowColumn>
                            <TableRowColumn> { user.department } </TableRowColumn>
                            <TableRowColumn> <EditUserDialogue user = {user}/> </TableRowColumn>
                        </TableRow>
                    )
                }) }
            </TableBody>
        </Table>
    )
}

const mapState = store => ({ users: store.users })

export default connect(mapState, null)(UserTable)