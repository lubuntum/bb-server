const db = require("../../database/database")

const createOrder = async (order) => {
    console.log(order.barrelSaunaId, new Date().toISOString())
    try {
        return await new Promise((resolve, reject) => {
            db.run("INSERT INTO `order` (barrel_sauna_id, account_id, price, created_at, count, status_id) VALUES (?, ?, ?, ?, ?, ?)", 
                [order.barrelSaunaId, order.accountId, order.price, new Date().toISOString(), order.count, order.statusId], (err) => {
                    if (err) return reject({status: 500, message: err})
                    resolve({status: 201, message: "created"})
                })
        })
    } catch(err) {
        return err
    }
}

const getOrdersByAccountId = async (accountId) => {
    try{
        return await new Promise((resolve, reject)=>{
            db.all("SELECT * FROM `order` where account_id=?",[accountId], (err, data) => {
                if (err) return reject({status: 500, message: err})
                resolve(data)
            })
        })
    } catch(err) {
        return err
    }
}

module.exports = {createOrder, getOrdersByAccountId}