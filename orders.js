const fs = require ('fs')
const addOrder = (order) => {
    const allOrders = loadOrders ()

    allOrders.push({Order: drink})

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

const saveOrders = () => {
    const ordersJSON = JSON.stringify(orders)
    fs.writeFileSync('orders.json', ordersJSON)
}
const listOrders = () => {
    const allOrders = loadOrders()

    allOrders.map((order) => {
        console.log(order.Order)
    })
}
