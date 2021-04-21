const macDB = require('./data/macdb.json')

/*
* Validates the MAC address, returns false if MAC is invalid.
* @param MAC
* @returns {boolean}
*
 */
function validateMAC(MAC){
    if(MAC.length > 17 || MAC.length < 17) return false
    return true
}


/**
 * Reads the MAC address and returns All information if MAC address is valid
 * @param macAddr
 * @returns {Promise<Array>}
 */
function All(macAddr){
    return new Promise((resolve, reject) => {
        if(!validateMAC(macAddr)) reject('You must supply a valid mac address')
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

module.exports = {
    All
}