const http = require('node:http');
const express = require('express');
const router = express.Router();
module.exports = router;

const bodyParser = require('body-parser');
const querystring = require('querystring');
const fs = require('fs');
var __dirname = "/Users/akancharla/340Test"
var indexFilePath = "/public/html/home.html";
var homeJsPath = "/public/javascripts/home.js";

router.get('/', function (req, res, next) {
    res.sendFile(indexFilePath, { root: __dirname });

});

router.get('/home.js', function (req, res, next) {
    res.sendFile(homeJsPath, { root: __dirname });
});