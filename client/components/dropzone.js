import React from 'react'
import ImageUploader from 'react-images-upload'

class Dropzone extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pictures: [],
        }
        this.onDrop = this.onDrop.bind(this)
    }
    onDrop = (picture) => {
        // console.log(URL.createObjectURL(picture[0]))
        // this.setState({ test: URL.createObjectURL(picture[0]) })
        this.setState({
            pictures: this.state.pictures.concat(picture)
        }, ()=> console.log(this.state.pictures))
    }

    detectFaces = () => {
        // send all blobs on the state to the MS Faces API
        // gets the coords of their faces
        // finds the center of their face
    }

    crop = (pic, coord) => {
        // crops 300 x 300 around the given coord of the picture
        // returns the pic as a blob
    }

    save = () => {

    }

    render() {
        return (
            <ImageUploader
                withIcon={true}
                withLabel={false}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
        )
    }
}

export default Dropzone