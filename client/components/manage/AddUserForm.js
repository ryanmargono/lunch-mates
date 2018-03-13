import { TextField, RaisedButton } from 'material-ui'
import React from 'react'
import { connect } from 'react-redux'
import { postUser } from '../../reducers/users'

const AddUserForm = (props) => {
    const addUser = () => {
        const name = document.getElementById('name').value
        const department = document.getElementById('department').value
        const newUser = { name, department }
        props.postUser(newUser)

    }
    return (
        <div>
            <TextField id="name" hintText="Full Name" /> <TextField id="department" hintText="Department" /> <RaisedButton onClick={addUser} label="Add" />
        </div>
    )
}

const mapDispatch = dispatch => ({ postUser: newUser => dispatch(postUser(newUser)) })

export default connect(null, mapDispatch)(AddUserForm)