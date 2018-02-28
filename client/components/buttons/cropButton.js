import React from 'react'
import { Button } from 'react-materialize'
import { connect } from 'react-redux'
import $ from 'jquery'
import { addResults, clearResults } from '../../reducers/results'
import { clearPictures, } from '../../reducers/pictures'
import cropImage from 'crop-image'

const CropButton = (props) => {

    const onSubmit = () => {
        props.clearResults()
        Promise.all(props.pictures.map(pic => $.post({
            url: "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect",
            contentType: "application/octet-stream",
            headers: {
                'Ocp-Apim-Subscription-Key': '6ab9b2912ddb439c80a7bfb26892bd3f'
            },
            processData: false,
            data: pic,
        })))
            .then((res) =>  {
                let results = []
                let coords = res.map(pic => pic[0]['faceRectangle'])
                props.pictures.forEach((pic, i)=>{
                    const currentPic = document.getElementById(`picture${i}`)
                    const { top, left, width, height } = coords[i]
                    let cropped
                    let shift
                    if (width >= 300 || height >= 300) {
                        const proportion = width / 300
                        shift = ((300*proportion) - width) /2
                        cropped = cropImage(currentPic, left-shift, top-shift, width , height, 300, 300)
                    }
                    else {
                        shift = (300-width)/2
                        cropped = cropImage(currentPic, left-shift, top-shift, 300 , 300, 300, 300)
                    }
                    cropped['name'] = pic.name
                    results.push(cropped)
                })
                props.addResults(results)
            })
    }

    return <Button onClick={onSubmit}> Submit </Button>
}

const mapState = ({ pictures, results }) => ({ pictures, results })

const mapDispatch = dispatch => ({ 
    addResults: results => dispatch(addResults(results)),
    clearResults: () => dispatch(clearResults())
})

export default connect(mapState, mapDispatch)(CropButton)