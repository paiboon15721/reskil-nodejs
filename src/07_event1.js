function Emitter() {
  this.events = {}
}

Emitter.prototype.on = function (type, listener) {
  this.events[type] = this.events[type] || []
  this.events[type].push(listener)
}

Emitter.prototype.emit = function (type) {
  if (this.events[type]) {
    this.events[type].forEach(listener => {
      listener()
    })
  }
}

const textbox = new Emitter()

textbox.on('click', () => {
  console.log('textbox clicked')
})

textbox.on('click', () => {
  console.log('textbox2 clicked')
})

textbox.emit('click')
