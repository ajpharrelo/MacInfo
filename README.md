# MacInfoJS
Basic API to retrieve information about an MAC address, for NodeJS.


### Usage
Retrieve all MAC address information

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
      // Handle if error is caught
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

