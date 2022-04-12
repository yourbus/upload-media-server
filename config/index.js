const Cloud = require('@google-cloud/storage')
const path = require('path')

const serviceKey = path.join(__dirname, "../Key.json")
console.log(serviceKey)

const { Storage } = Cloud

const storage = new Storage({
  keyFilename: serviceKey,
  projectId: "yourbus-335222",
})

module.exports = storage
