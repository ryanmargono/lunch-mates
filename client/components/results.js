import React from 'react'
import { Row, Col } from 'react-materialize'
import { connect } from 'react-redux'
import DownloadButton from './buttons/downloadButton'

const Results = (props) => {
    const getImgSrc = (blob) => URL.createObjectURL(blob)
    if (!props.results.length) return <div> </div>
    return (
        <div >
            <Row>
                <h4> Results </h4>
            </Row>
            <Row style={{ overflowY: 'scroll', height: 375 }}>
                {props.results.map((pic, i) => {
                    return (
                        <Col s={12} key={i} style={{ padding: 10 }}>
                            <img id={`resultsPic${i}`} src={getImgSrc(pic)} />
                        </Col>
                    )
                })}
            </Row>
            <Row>
                <DownloadButton />
            </Row>
        </div>
    )
}

const mapState = store => ({ results: store.results }) 
export default connect(mapState, null)(Results)