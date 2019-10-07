const button = document.createElement('button')
button.innerText = 'Click me'
button.onclick = () => {
  // System global var
  // Returns promise
  System
    .import('./image_viewer')
    .then(module => {
      module.default()
    })
}

document.body.appendChild(button)
