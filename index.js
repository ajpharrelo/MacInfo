const express = require('express')
const app = express()
const macInfo = require('./macinfo')

// Limit the request size limit
app.use(express.urlencoded({ extended: true, limit: "1kb" }))
app.use(express.json({ limit: "1kb" }))

app.get('/api/mac-db/', (req, res) => {
    let mac = req.query.mac
    let mode = req.query.mode

    if(!mode || !mac) res.sendStatus(400)

    switch (mode)
    {
        case "all":
            macInfo.All(mac)
                .then(data => {
                    res.json(data)
                })
                .catch(error => {
                    res.sendStatus(400)
                })
            break;

        case "companyname":
            macInfo.companyName(mac)
                .then(data => {
                    res.json(data)
                })
                .catch(error => {
                    res.sendStatus(400)
                })
            break;

        default:
            res.sendStatus(400)
    }
})

app.listen(process.env.PORT || 3000);