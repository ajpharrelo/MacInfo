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
            // Checks small size blocks MA-S
            mac => mac.oui === MAC.substring(0, 13).toUpperCase()
            // Checks Medium size blocks (MA-M)
            || mac.oui === MAC.substring(0, 10).toUpperCase()
            // Checks Large size -L
            || mac.oui === MAC.substring(0, 8).toUpperCase()
        )
        if(found.length > 0) return found[0]
        return false
    }
    return false
}

/**
 * Returns all information about a MAC address, if MAC is valid.
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
 * Retrieves the MAC address' owning company address, will return "Private" if company info is private.
 * @param {string} MAC
 * @returns {Promise<string>}
 */
function companyAddress(MAC){
    return new Promise((resolve, reject) => {
        let info = validateMAC(MAC)
        if(!info) reject(true)
        resolve(info.companyAddress === "" ? "Private" : info.companyAddress)
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


/**
 * Retrieves the MAC address' OUI.
 * @param {string} MAC
 * @returns {Promise<string>}
 */
function oui(MAC){
    return new Promise((resolve, reject) => {
        let info = validateMAC(MAC)
        if(!info) reject(true)
        resolve(info.oui)
    })
}

/**
 * Retrieves the MAC address' Assignment Block Size.
 * @param {string} MAC
 * @returns {Promise<string>}
 */
function blockSize(MAC){
    return new Promise((resolve, reject) => {
        let info = validateMAC(MAC)
        if(!info) reject(true)
        resolve(info.assignmentBlockSize)
    })
}

module.exports = {
    All,
    companyName,
    companyAddress,
    countryCode,
    oui,
    blockSize
}