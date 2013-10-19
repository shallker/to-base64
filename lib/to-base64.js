var Http = require('node-http');
var reges = require('reges');

function toBase64(path, callback, onError) {
  (path.match(reges.url) ? fromURL : fromFile).apply(this, arguments);
};

function fromFile(path, callback, onError) {
  // #TODO
}

function fromURL(url, callback, onError) {
  var http = new Http;

  http.GET(url);
  http.on('error', onError);

  http.on('buffer', function (buffer, response) {
    var headers = {};

    for (var k in response.headers) {
      headers[k.toLowerCase()] = response.headers[k];
    }
  
    callback.call(this, {
      base64: buffer.toString('base64'),
      contentType: headers['content-type']
    });
  });
}

exports = module.exports = toBase64;

exports.fromFile = fromFile;

exports.fromURL = fromURL;
