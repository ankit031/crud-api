const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { toJSON, paginate } = require('./plugins');

const itemSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        description: {
            type: String,
            trim: true
        },
        brandName: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        ram: {
            type: String,
            required: true,
        },
        internalStorage: {
            type: String,
            required: true
        },
        os: {
            type: String,
            enum: ['android', 'ios'],
            required: true
        },
        colour: {
            type: String,
            required: true,
        },
        productDimension: {
            type: String,
            required: true,
        },
        displayTechnology: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

// add plugin that converts mongoose to json
itemSchema.plugin(toJSON);
itemSchema.plugin(paginate);


const Item = mongoose.model('items', itemSchema);

module.exports = Item;
