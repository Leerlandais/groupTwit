const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(req.query);
    let nom = req.query.nom;
res.send('<!DOCTYPE html>\n' +
    '<html>\n' +
    '  <head>\n' +
    '    <title>Test</title>\n' +
    '    <link rel=\'stylesheet\' href=\'/stylesheets/style.css\' />\n' +
    '  </head>\n' +
    '  <body>\n' +
    '    <h1>Postman Test</h1>\n' +
    `    <p>Hello ${nom}</p>\n` +
    '  </body>\n' +
    '</html>');
});

module.exports = router;