import React from 'react'
import { Row, Col } from 'react-materialize'
import Nav from './nav.js'
import Dropzone from './dropzone.js'
import Help from './help.js'
import CropButton from './buttons/cropButton'
import DownloadButton from './buttons/downloadButton'
import Results from './results'
import Uploaded from './uploaded'

const Home = () => {
    return (
        <div>
            <Row> <Nav /> </Row>
            <Row>
                <Dropzone />
            </Row>
            <Row>
                <Col s={6}>
                    <Uploaded />
                </Col>
                <Col s={6}>
                    <Results />
                </Col>
            </Row>

        </div>
    )
}

export default Home