import React from 'react'
import { AppBar, Drawer, MenuItem } from 'material-ui'
import { Link, Router } from 'react-router-dom'

class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = { showMenu: false }
    }

    render() {
        const toggleMenu = () => this.setState({ showMenu: !this.state.showMenu})
        return (
            <div>
                <AppBar
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonClick={ toggleMenu }
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.showMenu}
                    onRequestChange={toggleMenu}
                >
                <MenuItem containerElement={<Link to='/' />}> Home </MenuItem>
                <MenuItem containerElement={<Link to='/manage' />}> Manage </MenuItem>
                <MenuItem containerElement={<Link to='/history' />}> History </MenuItem>
                </Drawer>
            </div>
        )
    }
}

export default Nav