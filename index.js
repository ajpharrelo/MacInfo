const express = require('express')
const app = express()
const macDB = require('./data/macdb.json')

/**
 * Reads the MAC address and returns the information if MAC address is valid
 * @param macAddr
 * @returns {Promise<Array>}
 */
function macInfoAll(macAddr){
    return new Promise((resolve, reject) => {
        if(macAddr.length > 17 || macAddr.length < 17) reject('You must supply a valid mac address')
        else{
            let found = macDB.filter(mac => mac.oui === macAddr.substring(0, 8).toUpperCase())
            if(found.length > 0){
                resolve(found[0])
            }
            else {
                reject('Invalid MAC address')
            }
        }
    })
}


// Limit the request size limit
app.use(express.urlencoded({ extended: true, limit: "1kb" }))
app.use(express.json({ limit: "1kb" }))

app.get('/api/GetMacInfo/All/:mac', (req, res) => {
    macInfoAll(req.params.mac)
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.json(error)
        })

})

app.listen(process.env.PORT || 3000);