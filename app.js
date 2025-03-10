//docker run -d -p 3000:3000 -e HOSTNAME=%HOSTNAME% -e PORT=%PORT% my-node-app
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const {loginAccount, registerAccount} = require("./services/database_services/accountService")
const app = express()

app.use(cors())
app.use(bodyParser.json())

app.post('/register', async (req, res)=>{
    try {
        const result = await registerAccount(req.body)
        res.status(result.status).json(result)
    } catch(err) {
        res.status(err.status).json(err)
    }
    
})
app.post('/login', (req, res) => {
    const {email, pass} = req.body
    loginAccount(email, pass).then(result => {
        res.status(result.status).json(result)
    }).catch(err=> {
        res.status(err.status).json(err)
    })
})

app.listen(process.env.PORT, process.env.HOSTNAME,  ()=> {
    console.info(`server started at ${process.env.HOSTNAME}:${process.env.PORT}`)
})