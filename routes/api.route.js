/**
 * Definition of the api routes.
 * 
 * @author Filipe Mendonca
 */
var express = require('express');
var router = express.Router();
var controller = require('../controllers/upload.controller');

/**
 * route that retrieves the updated list of files
 */

router.get('/files', controller.updateFiles);


module.exports = router;