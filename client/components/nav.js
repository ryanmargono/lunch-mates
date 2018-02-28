import React from 'react'
import { Navbar, NavItem } from 'react-materialize'
import Help from './help'

const Nav = () => {
    return (
        <Navbar brand="Headshot Maker" right>
            <NavItem> <Help /> </NavItem>
        </Navbar>
    )
}

export default Nav