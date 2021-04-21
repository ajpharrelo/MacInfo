const express = require('express')
const app = express()
const macInfo = require('./macinfo')

// Limit the request size limit
app.use(express.urlencoded({ extended: true, limit: "1kb" }))
app.use(express.json({ limit: "1kb" }))

app.get('/api/GetMacInfo/All/:mac', (req, res) => {
    macInfo.All(req.params.mac)
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.json({error: true, message: error})
        })
})
app.listen(process.env.PORT || 3000);