import React from 'react'
import { Dialog, RaisedButton, TextField } from 'material-ui'
import EditUserForm from './EditUserForm'

class EditUserDialog extends React.Component {
    constructor(props) {
        super(props)
        this.state = { open: false }
    }
    render() {
        const openDialogue = () => this.setState({open:true})
        const closeDialogue = () => this.setState({open:false})
        return (
            <div>
                <RaisedButton fullWidth={true} label="Edit / Delete" onClick={openDialogue} />
                <Dialog
                    modal={false}
                    open={this.state.open}
                    onRequestClose={closeDialogue}
                >
                    <div>
                        <h5> Edit User </h5>
                        <EditUserForm user = {this.props.user}/>
                    </div>
            </Dialog>
            </div>
        )
    }
}

export default EditUserDialog