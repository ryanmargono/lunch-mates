import React from 'react'
import ImageUploader from 'react-images-upload'
import { connect } from 'react-redux'
import { addPictures } from '../reducers/pictures'

const Dropzone = (props) => {

    const onDrop = (pictures) => {
        let max = pictures.length
        let index = 0
        while (max){
            props.addPictures(pictures[index])
            index ++
            max --
        }
    }

    return (
        <ImageUploader
            onChange={onDrop}
            imgExtension={['.jpg', '.gif', '.png', '.gif', '.jpeg']}
        />
    )
}

const mapDispatchToProps = dispatch => ({
    addPictures: pictures => dispatch(addPictures(pictures)),
})

export default connect(null, mapDispatchToProps)(Dropzone)