/**
 * Definition of the api routes.
 * 
 * @author Filipe Mendonca
 */
var express = require('express');
var router = express.Router();
var uploadController = require('../controllers/upload.controller');
var downloadController = require('../controllers/download.controller');

/**
 * route that retrieves the updated list of files
 */

router.get('/files', uploadController.updateFiles);

router.get('/download/', downloadController.downloadFiles);

router.get('/download/:name', downloadController.downloadFile);

module.exports = router;