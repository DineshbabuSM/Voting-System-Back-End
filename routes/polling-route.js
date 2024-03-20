const express = require('express');
const router = express.Router();
const pollingController = require('../controllers/polling-controller');

router.route('/').post(pollingController.postPollingData);
router.route('/pollingResult').get(pollingController.pollingPartyCount);

module.exports = router;    