# openssl-rfc-mapping

[![npm version](https://badge.fury.io/js/openssl-rfc-mapping.svg)](http://badge.fury.io/js/openssl-rfc-mapping)
[![CircleCI](https://circleci.com/gh/lmammino/openssl-rfc-mapping.svg?style=shield)](https://circleci.com/gh/lmammino/openssl-rfc-mapping)
[![codecov.io](https://codecov.io/gh/lmammino/openssl-rfc-mapping/coverage.svg?branch=master)](https://codecov.io/gh/lmammino/openssl-rfc-mapping)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A quick'n'dirty library and command line utility to map OpenSSL RFC to machine parseable data.

The data is taken from [testssl.sh](https://testssl.sh/openssl-rfc.mapping.html).


## 💽 Install

As usual in 2018, most of the software is installed through `npm`, this one makes no difference:

```bash
npm install --global openssl-rfc-mapping
```

Be sure to have `node >= 6.0.0`.


### 💾 Precompiled binaries

Alternatively, you can install openssl-rfc-mapping by downloading one of the precompiled executables available for Windows, Linux or Mac in the [releases page](https://github.com/lmammino/openssl-rfc-mapping/releases).


### 🦔 Usage

openssl-rfc-mapping can be used from command line or programmatically.


#### 💻 Command line usage

Once you have openssl-rfc-mapping installed you will have access to the `openssl-rfc-mapping` executable (or its alias `ssl-rfc-json`).

So you just have to run:

```bash
openssl-rfc-mapping
```

And you will get the mapping as a JSON in the standard output. The mapping will be generated
in real time by parsing the data available on [testssl.sh](https://testssl.sh/openssl-rfc.mapping.html), so be sure to have internet connection.


#### ⌨️ Programmatic usage

You can easily use the same functionality in your Node.js code as follows:

```javascript
const getMapping = require('openssl-rfc-mapping')

getMapping()
  .then((data) => console.log(data.mapping))
  .catch((err) => console.error(err))
```

`getMapping` returns a promise that resolves to an object that has 2 keys:
`_meta` for metadata and `mapping` containing the actual mapping to the RFC spec.

The mapping will look like the following dictionary:

```json
{
  "0x060040": {
    "name": "DES-CBC-MD5",
    "keyExch": "RSA",
    "encryption": "DES",
    "bits": "56",
    "chiperSuiteName": "SSL_CK_DES_64_CBC_WITH_MD5"
  },
  "0x0700c0": {
    "name": "DES-CBC3-MD5",
    "keyExch": "RSA",
    "encryption": "3DES",
    "bits": "168",
    "chiperSuiteName": "SSL_CK_DES_192_EDE3_CBC_WITH_MD5"
  },
  "0x080080": {
    "name": "RC4-64-MD5",
    "keyExch": "RSA",
    "encryption": "RC4",
    "bits": "64",
    "chiperSuiteName": "SSL_CK_RC4_64_WITH_MD5"
  }
}
```

`getMapping` will parse the source website in real time, every time you invoke it.
If you want a pre-compiled static version of it, you can import a mapping file that is
generated everytime a new version of this project is published on NPM:

```javascript
const data = require('openssl-rfc-mapping/src/mapping.json')

// do stuff with data._meta and data.mapping
```

## 👯‍ Contributing

Everyone is very welcome to contribute to this project.
You can contribute just by submitting bugs or suggesting improvements by
[opening an issue on GitHub](https://github.com/lmammino/openssl-rfc-mapping/issues).


## 🤦‍ License

Licensed under [MIT License](https://github.com/lmammino/openssl-rfc-mapping/LICENSE). © Luciano Mammino.
