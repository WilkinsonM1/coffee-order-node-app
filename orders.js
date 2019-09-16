const fs = require ('fs')
const addOrder = (order) => {
    const allOrders = loadOrders ()

    allOrders.push({Order: order})

    saveOrders(allOrders)
}

const loadOrders = () => {
    try {
        const dataBuffer = fs.readFileSync('orders.json')
        const ordersJSON  = dataBuffer.toString()
        return JSON.parse(ordersJSON)
    } catch (e){
        return []
    }
}

const saveOrders = (orders) => {
    const ordersJSON = JSON.stringify(orders)
    fs.writeFileSync('orders.json', ordersJSON)
}
const listOrders = () => {
    const allOrders = loadOrders()

    allOrders.map((order) => {
        console.log(order.Order)
    })
}

const removeOrder = (deletedOrder) => {
        const allOrders = loadOrders()

        const ordersToKeep = allOrders.filter((order) => {
            return order.Order !== deletedOrder
        })

        saveOrders(ordersToKeep)
}

module.exports = {
    addOrder,
    loadOrders,
    saveOrders,
    listOrders,
    removeOrder,
}

