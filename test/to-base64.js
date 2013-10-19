var test = require('simple-test');
var toBase64 = require('../index');

test('toBase64', function (done) {

  var url = 'https://github.com/favicon.ico';
  var file = './favicon.ico';

  toBase64(url, function (result) {
    test.ok(result.base64);
    test.ok(result.contentType);
    done();
  }, function (err) {
    console.log('error', err);
  });

});
