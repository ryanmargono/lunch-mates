import React from 'react'
import { Dialog, RaisedButton, TextField } from 'material-ui'
import AddUserForm from './AddUserForm'

class AddUserDialog extends React.Component {
    constructor(props) {
        super(props)
        this.state = { open: false }
    }
    render() {
        const openDialogue = () => this.setState({open:true})
        const closeDialogue = () => this.setState({open:false})
        return (
            <div>
                <RaisedButton fullWidth={true} label="Add Employee" onClick={openDialogue} />
                <Dialog
                    modal={false}
                    open={this.state.open}
                    onRequestClose={closeDialogue}
                >
                    <div>
                        <h5> Add User </h5>
                        <AddUserForm />
                    </div>
            </Dialog>
            </div>
        )
    }
}

export default AddUserDialog