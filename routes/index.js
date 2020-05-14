const express = require('express');
const router = express.Router();
const { catchErrors } = require('../handlers/errorHandlers');

const storeController = require('../controllers/storeController');

// Do work here
router.get('/', storeController.homePage);
router.get('/add', storeController.addStore);
router.post('/add', catchErrors(storeController.createStore));

module.exports = router;

// mongodb + srv:jalajIsTheAdmin:xpzZwP0JeQkCuYK1@db-jalaj-1-vxvp0.mongodb.net/test?w=majority
