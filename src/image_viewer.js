import '../styles/image_viewer.css'
import big from '../assets/big.jpeg' // needs to resolve right path
import small from '../assets/small.jpeg' // base64 string

const image = document.createElement('img')
image.src = small

document.body.appendChild(image)
const bigImage = document.createElement('img')
bigImage.src = big

document.body.appendChild(bigImage)
