import React from 'react'
import Nav from './nav.js'
import Dropzone from './dropzone.js'
import Help from './help.js'

const Home = () => {
    return (
        <div>
            <Nav />
            <div style={{padding: 50}}>
                <Dropzone />
            </div>
        </div>
    )
}

export default Home