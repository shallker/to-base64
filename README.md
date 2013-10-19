to-base64
==========

Transform file from local or network to base64 string data


## Installation
```shell
npm install to-base64
```

## Quick Start
```javascript
var toBase64 = require('to-base64');

toBase64('https://github.com/favicon.ico', function (result) {
  console.log(result.base64);
  console.log(result.contentType);
}, function (error) {
  console.log(error);
});
```

## APIs
### toBase64(String path, Function callback, function onError)
#### .fromFile(String path, Function callback, Function onError)
#### .fromURL(String url, Function callback, Function onError)


## Todo
- add `fromFile` support

## License

MIT
