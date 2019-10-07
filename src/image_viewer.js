import '../styles/image_viewer.css'
import small from '../assets/small.jpeg' // base64 string

export default () => {
  const image = document.createElement('img')
  image.src = small
  document.body.appendChild(small)
}
