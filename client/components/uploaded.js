import React from 'react'
import { Row, Col } from 'react-materialize'
import { connect } from 'react-redux'
import CropButton from './buttons/cropButton'

const Uploaded = (props) => {
    const getImgSrc = (blob) => URL.createObjectURL(blob)
    if (!props.pictures.length && !props.results.length) return <div> </div>
    return (
        <div >
            <Row>
                <h4> Uploaded </h4>
            </Row>
            <Row style={{ overflowY: 'scroll', height: 375 }}>
                {props.pictures.map((pic, i) => {
                    return (
                        <Col s={12} key={`picture${i}`} style={{ padding: 10 }}>
                            <img id={`picture${i}`} src={getImgSrc(pic)} />
                        </Col>
                    )
                })}
            </Row>
            <Row>
                <CropButton />
            </Row>
        </div>
    )
}

const mapState = store => ({ pictures: store.pictures, results: store.results })
export default connect(mapState, null)(Uploaded)