import React from 'react'
import { Divider } from 'material-ui';
import Nav from '../Nav'
import GroupTable from './GroupTable'

const Manage = (props) => {
    return (
        <div>
            <Nav />
            <div style={{ padding: 20 }}>
                <h3> History </h3>
                <Divider />
                <GroupTable />
                <Divider />
            </div>
        </div>
    )
}

export default Manage