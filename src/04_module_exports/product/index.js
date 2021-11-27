const { createOrder } = require('./order')

module.exports = {
  order: createOrder,
  payment: () => console.log('payment success'),
}
