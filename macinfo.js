const macDB = require('./data/macdb.json')

/*
* Validates the MAC address, returns false if MAC is invalid.
* @param MAC
* @returns {boolean}
*
 */
function validateMAC(MAC){
    if(MAC.length === 17){
        let found = macDB.filter(mac => mac.oui === MAC.substring(0, 8).toUpperCase())
        if(found.length > 0) return found[0]
        return false
    }
    return false
}



/**
 * Reads the MAC address and returns All information if MAC address is valid
 * @param MAC
 * @returns {Promise<Array>}
 */
function All(MAC){
    return new Promise((resolve, reject) => {
        let info = validateMAC(MAC)
        if(!info) reject(true)
        else{
            resolve(info)
        }
    })
}


/*
* Returns MAC Address company name, will return "Private" if company info is private.
* @param MAC
 */
function companyName(MAC){
    return new Promise((resolve, reject) => {

        let info = validateMAC(MAC)
        if(!info) reject(true)
        console.log(info.companyName)
        resolve(info.companyName)

    })
}

module.exports = {
    All,
    companyName
}