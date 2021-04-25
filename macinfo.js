const macDB = require('./data/macdb.json')

//TODO: Need to add functionality to sort MAC Addresses properly rather than just sorting to the first 3 bytes.

/**
* Validates the MAC address, returns false if MAC is invalid.
* @param {string} MAC
* @returns {boolean}
*
 */
function validateMAC(MAC){
    if(MAC.length === 17){
        let found = macDB.filter(
            // MA-S
            mac => mac.oui === MAC.substring(0, 13).toUpperCase()
            // MA-M
            || mac.oui === MAC.substring(0, 10).toUpperCase()
            // MA-L
            || mac.oui === MAC.substring(0, 8).toUpperCase()
        )
        if(found.length > 0) return found[0]
        return false
    }
    return false
}

/**
 * Reads the MAC address and returns all information if MAC address is valid
 * @param {string} MAC
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

/**
 * Retrieves the MAC address' owning company name, will return "Private" if company info is private.
 * @param {string} MAC
 * @returns {Promise<string>}
 */
function companyName(MAC){
    return new Promise((resolve, reject) => {
        let info = validateMAC(MAC)
        if(!info) reject(true)
        resolve(info.companyName)
    })
}

/**
 * Retrieves the MAC address' owning company address, will return blank if company info is private.
 * @param {string} MAC
 * @returns {Promise<string>}
 */
function companyAddress(MAC){
    return new Promise((resolve, reject) => {
        let info = validateMAC(MAC)
        if(!info) reject(true)
        resolve(info.companyAddress === "" ? "Private" : info.countryCode)
    })
}

/**
 * Retrieves the MAC address' country code, will return "Private" if company info is private.
 * @param {string} MAC
 * @returns {Promise<string>}
 */
function countryCode(MAC){
    return new Promise((resolve, reject) => {
        let info = validateMAC(MAC)
        if(!info) reject(true)
        resolve(info.countryCode === "" ? "Private" : info.countryCode)
    })
}


module.exports = {
    All,
    companyName,
    companyAddress,
    countryCode
}