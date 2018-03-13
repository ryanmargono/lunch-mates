import React from 'react'
import { RaisedButton } from 'material-ui'
import { connect } from 'react-redux'
import { replenishCurrent } from '../../reducers/currentUsers'
import { addHistory } from '../../reducers/history'
import { allSameDept, allDepCalled, addToSets, addToGroup } from '../../utils/group'

const GroupButton = (props) => {

    const clickHandler = () => {
        let group = []
        const persistant = props.users
        let current = props.current
        let prevNames = new Set()
        let prevDept = new Set()
        
        if (!current) current = persistant

        while (group.length < 4) {
            if (!current) current = persistant
            if (current.length === 4) {
                group = current
                current = []
            }
            if (current.length < 4) {
                prevNames.clear()
                prevDept.clear()
                addToSets(current, prevNames, prevDept)
                group = current
                current = persistant
                addToGroup(group, current, prevNames, prevDept)
            }
            else addToGroup(group, current, prevNames, prevDept)
        }
        
        if (!current) props.replenishCurrent()
        else props.updateCurrent(current)
    }

    return (
        <div style={{ paddingTop: 20 }}>
            <RaisedButton label="Generate a Group" fullWidth={true} onClick={clickHandler} />
        </div>
    )
}

const mapState = store => ({ users: store.users, current: store.current })
const mapDispatch = dispatch => ({
    replenishCurrent: users => dispatch(replenishCurrent(users)),
    addHistory: group => dispatch(addHistory(group))
})
export default connect(mapState, mapDispatch)(GroupButton)