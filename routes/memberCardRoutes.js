const express = require('express');
const router = express.Router();
const memberCardsController = require('../controllers/memberCardController')

//Define the member cards routes
router.get('/', memberCardsController.getAllCards);
router.post('/create', memberCardsController.createCard);
router.put('/update/:id', memberCardsController.updateCard);
router.delete('/delete/:id', memberCardsController.deleteCard);

module.exports = router;
