import React from 'react'
import { Button } from 'react-materialize'
import FileSaver from 'file-saver'
import { connect } from 'react-redux'

const DownloadButton = (props) => {
    const onSubmit = () => {
        props.results.forEach(pic => FileSaver.saveAs(pic, pic.name))
    }
    return (
        <Button onClick={onSubmit}> Download </Button>
    )
}

const mapState = store => ({ results: store.results })
export default connect(mapState, null)(DownloadButton)