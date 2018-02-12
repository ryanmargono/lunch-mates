import React from 'react'
import { Navbar, NavItem } from 'react-materialize'
import Help from './help'

const Nav = () => {
    return (
        <Navbar brand="Arkadium: Headshot Creator" right>
            <NavItem> <Help /> </NavItem>
        </Navbar>
    )
}

export default Nav