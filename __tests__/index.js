const getMapping = require('../src')

test('It should parse the page and construct the mapping', (endTest) => {
  getMapping()
    .then((data) => {
      expect(data._meta.generatedWith).toEqual('https://github.com/lmammino/openssl-rfc-mapping')
      expect(data.mapping['0x050080'].chiperSuiteName).toEqual('SSL_CK_IDEA_128_CBC_WITH_MD5')
      endTest()
    })
})
