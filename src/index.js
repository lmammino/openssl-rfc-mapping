const cheerio = require('cheerio')
const got = require('got')
const { version: generatorVersion } = require('../package.json')

const getMapping = () => new Promise((resolve, reject) => {
  got('https://testssl.sh/openssl-rfc.mapping.html')
    .then((response) => {
      try {
        const $ = cheerio.load(response.body)
        const rows = $('table tbody tr')

        const mapping = {}
        rows.each((i, row) => {
          const columns = $(row).children()
          const rawKey = $(columns.get(0)).text().trim()
          const entryKey = rawKey.substr(1, rawKey.length - 2)
          mapping[entryKey] = {
            name: $(columns.get(1)).text().trim(),
            keyExch: $(columns.get(2)).text().trim(),
            encryption: $(columns.get(3)).text().trim(),
            bits: $(columns.get(4)).text().trim(),
            chiperSuiteName: $(columns.get(5)).text().trim()
          }
        })

        const returnObj = {
          _meta: {
            generatedAt: Date.now(),
            generatedWith: 'https://github.com/lmammino/openssl-rfc-mapping',
            generatorVersion
          },
          mapping
        }

        return resolve(returnObj)
      } catch (e) {
        return reject(e)
      }
    })
    .catch(reject)
})

module.exports = getMapping
