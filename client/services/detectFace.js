// import rp from 'request-promise'

// const key = "c90c0ec62956482e9d56513c58ee3d42"
// const postUrl = "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect"

// const options = {
//     method: 'POST',
//     uri: postUrl,
//     headers: {
//         "Content-Type" : "application/json",
//         "Ocp-Apim-Subscription-Key" : key,
//     },
//     body: {url: "https://static.pexels.com/photos/428341/pexels-photo-428341.jpeg"},
//     json: true 
// }

// const detectFace = (image) => {
//     const options = {
//         method: 'POST',
//         uri: postUrl,
//         headers: {
//             "Content-Type" : 'application/octet-stream',
//             "Ocp-Apim-Subscription-Key" : key,
//         },
//         body: {data: image},
//         json: true 
//     }
//     rp(options).then(res => console.log(res))
// }

// export default detectFace