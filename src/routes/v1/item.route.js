const express = require('express');
const validate = require('../../middlewares/validate');

const itemController = require('../../controllers/item.controller');
const itemValidation = require('../../validations/item.validation');

const router = express.Router();

router
    .route('/')
    .post(validate(itemValidation.createItem), itemController.createItem)
    .get(validate(itemValidation.getItems), itemController.getItems)

router
    .route('/:itemId')
    .get(validate(itemValidation.getItem), itemController.getItem)
    .patch(validate(itemValidation.updateItem), itemController.updateItem)
    .delete(validate(itemValidation.deleteItem), itemController.deleteItem);


module.exports = router;
