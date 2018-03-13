import React from 'react'
import { Divider } from 'material-ui';
import Nav from '../Nav'
import UserTable from './UserTable'
import AddUserDialog from './AddUserDialog'

const Manage = (props) => {
    return (
        <div>
            <Nav />
            <div style={{ padding: 20 }}>
                <h3> Manage Users </h3>
                <Divider />
                <AddUserDialog />
                <Divider />
                <UserTable />
            </div>
        </div>
    )
}

export default Manage