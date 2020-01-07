
const logger = require("../logger");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  logger.info("new request with url %s", req.url);
  res.send({hello: "world"});
  res.end(next);

});

module.exports = router;
