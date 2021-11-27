const Emitter = require('events')

const textbox = new Emitter()

textbox.on('click', () => {
  console.log('textbox clicked')
})

textbox.on('click', () => {
  console.log('textbox2 clicked')
})

textbox.emit('click')
