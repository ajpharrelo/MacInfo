const macDB = require('./data/macdb.json')

//TODO: Need to add functionality to sort MAC Addresses properly rather than just sorting to the first 3 bytes.

/**
* Validates the MAC address, returns false if MAC is invalid.
* @param {string} MAC
* @returns {Array}
*
 */
function validateMAC(MAC){
    if(MAC.length === 17){

        let MA_S = macDB.filter(mac => mac.oui === MAC.substring(0, 13).toUpperCase())
        let MA_M = macDB.filter(mac => mac.oui === MAC.substring(0, 10).toUpperCase())
        let MA_L = macDB.filter(mac => mac.oui === MAC.substring(0, 8).toUpperCase())

        let returnMac = [];

        if(MA_L.length > 0) returnMac.push(MA_L[0])
        if(MA_M.length > 0) returnMac.push(MA_M[0])
        if(MA_S.length > 0) returnMac.push(MA_S[0])

        if(returnMac.length > 0) return returnMac

        else return false
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
        let companyNames = []

        for(let i = 0, len = info.length; i < len; i++) {
            // To retrieve the corresponding block-size for better context
            // {name: info[i].companyName, blockSize: info[i].assignmentBlockSize}
            companyNames.push(info[i].companyName)
        }

        resolve(companyNames)

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
        let companyAddr = []

        for(let i = 0, len = info.length; i < len; i++) {
            companyAddr.push(info[i].companyAddress)
        }

        resolve(companyAddr)
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
        let countryCodes = []

        for(let i = 0, len = info.length; i < len; i++) {
            countryCodes.push(info[i].countryCode === "" ? "Private" : info[i].countryCode)
        }

        resolve(countryCodes)
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
        let oui_s = []

        for(let i = 0, len = info.length; i < len; i++) {
            oui_s.push(info[i].oui)
        }

        resolve(oui_s)
    })
}

/**
 * Retrieves the MAC address' Assignment Block Size (MA-S, MA-M, MA-L)
 * @param {string} MAC
 * @returns {Promise<string>}
 */
function blockSize(MAC){
    return new Promise((resolve, reject) => {
        let info = validateMAC(MAC)
        if(!info) reject(true)
        let blockSizes = []

        for(let i = 0, len = info.length; i < len; i++) {
            blockSizes.push(info[i].assignmentBlockSize)
        }

        resolve(blockSizes)
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