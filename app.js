const fs = required('fs')
const {addOrder, removeOrder, loadOrders, saveOrders, listOrders} = require(./orders)
const yargs = require('yargs')

let command = process.argv[2]

