#!/usr/bin/env node

const getMapping = require('.')

getMapping()
  .then((mapping) => {
    console.log(JSON.stringify(mapping, null, 2))
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
