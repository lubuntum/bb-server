const express = require("express")
const router = express.Router()
const authentificateToken = require("../middleware/authentificateToken")
const {createOrder, getOrdersByAccountId} = require("../services/database_services/orderService")
router.post("/create-order", authentificateToken, async (req, res) => {
    try {
        const result = await createOrder(req.body)
        res.status(result.status).json(result)
    } catch(err) {
        res.send(err.status || 500).json(err)
    }
    
})

router.get("/order-by-account", authentificateToken, async (req, res) => {
    try {
        const result = await getOrdersByAccountId(req.jwtData.id)
        res.status(200).json(result)
    } catch(err) {
        res.status(err.status || 500).json(err)
    }
})

module.exports = router