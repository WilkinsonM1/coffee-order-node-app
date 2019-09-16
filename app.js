const fs = require('fs')
const {addOrder, removeOrder, loadOrders, saveOrders, listOrders} = require("./orders")
const yargs = require('yargs')

let command = process.argv[2]

if (command == "add") {
    addOrder(yargs.argv.orders)

}
else if (command == "delete"){
    removeOrder(yargs.argv.orders)
}
else if (command == "list"){
    listOrders()
}

