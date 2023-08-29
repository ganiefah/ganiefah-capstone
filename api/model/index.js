const { users } = require('./users')
const { products } = require('./products')

module.exports = {
    users: new users(),
    products: new products()
}