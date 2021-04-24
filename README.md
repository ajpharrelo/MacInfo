# MacInfoJS
Basic API to retrieve information about an MAC address.


### Usage
Retrieve all MAC address information

```js
const macInfo = require('./macinfo')

// Returns a promise
macInfo.All(mac)
  .then(data => {
      res.json(data)
  })
  .catch(error => {
      res.sendStatus(400)
  })
```
