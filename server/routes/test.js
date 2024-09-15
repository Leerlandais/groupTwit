const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
res.send('<!DOCTYPE html>\n' +
    '<html>\n' +
    '  <head>\n' +
    '    <title>Test</title>\n' +
    '    <link rel=\'stylesheet\' href=\'/stylesheets/style.css\' />\n' +
    '  </head>\n' +
    '  <body>\n' +
    '    <h1>Postman Test</h1>\n' +
    '    <p>First test</p>\n' +
    '  </body>\n' +
    '</html>');
});

module.exports = router;