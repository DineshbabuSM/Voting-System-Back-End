const express = require('express');
const router = express.Router();
const partyController = require('../controllers/party-controller');

router.route('/party').get(partyController.getPartyData);
router.route('/partyRegister').post(partyController.partyRegister);

module.exports = router;