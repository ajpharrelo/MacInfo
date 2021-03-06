### Update
As my first repo, I'm happy how it has done in terms of visibility, I will continue to update it as I have been.
<br />
*Ajae*

# MacInfo
Basic API to retrieve information about an MAC address, for NodeJS.

#### IMPORTANT: The JSON file for MAC address information is 12.5 MB - Be aware.

### Why ?
I recently needed a way to view information about an MAC address in one of my projects so after some searching I found a MAC Address information database that I could export  in JSON format, which gave me the inital idea to create a basic API solution to fufill my needs.

### Installation
Make sure to run ```npm i``` before running to install needed packages.

Required packages for **Demo**
- ExpressJS

Required packages for **macinfo**
- None

### Demo
Run the command
```
  node index
```
Make sure query parameters ```filter``` and ```mac``` are set.

Filter options
- ``all`` (Returns all info as an JSON object)
- ```companyname``` (Returns company name as string)
- ```companyaddress``` (Returns company address as string)
- ```country code``` (Returns MAC address creation country as string "GB, US, CH" etc)

Correct format example
```http://localhost:3000/?filter=all&mac=20:7c:8f:12:5e:c3```

Navigate to [localhost:3000](http://localhost:3000/?filter=all&mac=20:7c:8f:12:5e:c3) to see it in action.

### macinfo Usage
Retrieve all MAC address information.

```js
const macInfo = require('./macinfo')

macInfo.All(mac)
  .then(data => {
      /*
        * Promise resolve returned as an array
        {
          "oui":"00:00:00",
          "isPrivate":0,
          "companyName":"Example Company",
          "companyAddress":"123 Baker Street",
          "countryCode":"GB",
          // The block size of an OUI (MA-S: small, MA-M: medium, MA-L: Large)
          "assignmentBlockSize":"MA-L",
          "dateCreated":"2004-02-12",
          "dateUpdated":"2004-02-12"
        }
      */
      console.log(data)
  })
  .catch(error => {
      // Handle error
  })
```

### Retrieve MAC address company name
```js
    const macInfo = require('./macinfo')

    macInfo.companyName(mac)
        .then(data => {
            // Data = "Example Company"
        })
        .catch(error => {
            // Handle error
        })
```


### Retrieve MAC address company address
```js
    const macInfo = require('./macinfo')

    macInfo.companyAddress(mac)
        .then(data => {
            // Data = "123 Baker street"
        })
        .catch(error => {
            // Handle error
        })
```

### Retrieve MAC address country code
```js
    const macInfo = require('./macinfo')

    macInfo.countryCode(mac)
        .then(data => {
            // Data = "GB"
        })
        .catch(error => {
            // Handle error
        })
```

### Retrieve MAC address OUI
```js
    const macInfo = require('./macinfo')

    macInfo.oui(mac)
        .then(data => {
            // Data = ["12:34:56","12:34:56:7","12:34:56:78:9"]
        })
        .catch(error => {
            // Handle error
        })
```

### Retrieve MAC address blockSizes
If there are more than two objects in the array, the first result is the largest blocksize (MA-L) 
which is probably the smaller block sizes registration authority
```js
    const macInfo = require('./macinfo')

    macInfo.blockSize(mac)
        .then(data => {
            // Data = ["MA-L","MA-M","MA-S", "IAB"]
        })
        .catch(error => {
            // Handle error
        })
```


### License
License for this repository is: [GNU GPL 3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)

