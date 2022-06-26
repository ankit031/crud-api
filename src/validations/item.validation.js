const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const createItem = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        description: Joi.string(),
        brandName: Joi.string().required(),
        ram: Joi.string().required(),
        internalStorage: Joi.string().required(),
        os: Joi.string().required().valid('android', 'ios'),
        colour: Joi.string().required(),
        productDimension: Joi.string().required(),
        displayTechnology: Joi.string().required()
    }),
};

const updateItem = {
    params: Joi.object().keys({
        itemId: Joi.required(),
    }),
    body: Joi.object()
        .keys({
            name: Joi.string(),
            description: Joi.string(),
            brandName: Joi.string(),
            ram: Joi.string(),
            internalStorage: Joi.string(),
            os: Joi.string().valid('android', 'ios'),
            colour: Joi.string(),
            productDimension: Joi.string(),
            displayTechnology: Joi.string()
        })
        .min(1),
};
const getItems = {
    query: Joi.object().keys({
        name: Joi.string(),
        os: Joi.string(),
        sortBy: Joi.string(),
        limit: Joi.number().integer(),
        page: Joi.number().integer(),
    }),
};

const deleteItem = {
    params: Joi.object().keys({
        itemId: Joi.string(),
    }),
};

const getItem = {
    params: Joi.object().keys({
        itemId: Joi.string(),
    }),
};

module.exports = {
    createItem,
    getItems,
    getItem,
    updateItem,
    deleteItem
};
