import { TextField, RaisedButton } from 'material-ui'
import React from 'react'
import { connect } from 'react-redux'
import { deleteUser, updateUser } from '../../reducers/users'

const EditUserForm = (props) => {
    const user = props.user
    const updateUser = () => {
        const name = document.getElementById('name').value
        const department = document.getElementById('department').value
        const updatedUser = { name, department }
        props.updateUser(user.name, updatedUser)
    }
    const deleteUser = () => {
        props.deleteUser(user)
    }
    return (
        <div>
            <TextField id="name" hintText="Full Name" /> <TextField id="department" hintText="Department" /> <RaisedButton onClick={updateUser} label="Update" /> <RaisedButton onClick={deleteUser} label="Delete" />
        </div>
    )
}

const mapDispatch = dispatch => ({ 
    deleteUser: user => dispatch(deleteUser(user)),
    updateUser: (oldName, updatedUser) => dispatch(updateUser(oldName, updatedUser))
 })

export default connect(null, mapDispatch)(EditUserForm)