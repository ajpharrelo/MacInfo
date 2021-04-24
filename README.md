# MacInfoJS
Basic API to retrieve information about an MAC address.


### Usage
Retrieve all MAC address information

```js
const macInfo = require('./macinfo')

// Retrieve all information about a mac
macInfo.All(mac)
  .then(data => {
      /*
        * Data is returned as an array.
        * 
        {
          "oui":"00:0E:22",
          "isPrivate":1,
          "companyName":"Private",
          "companyAddress":"",
          "countryCode":"",
          "assignmentBlockSize":"MA-L",
          "dateCreated":"2004-02-12",
          "dateUpdated":"2004-02-12"
        }
      */
      
      // Do something with data
  })
  .catch(error => {
      // Handle error
  })
```
