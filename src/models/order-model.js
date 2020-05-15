'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        /* required: true, */
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        /* required: true, */
    },
    number: {
        type: String,
        /* required: true, */
    },
    schedulingdate: {
        type: String,
        /* required: true, */
    },
    itens: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },
        quantity: {
            type: Number,
            required: true,
            default: 1
        },
        price : {
            type: Number,
            required: true,
        },
        
    }],
    subtotal: {
        type: Number,
        /* required: true, */
    },
    status: {
        type: String,
        required: true, 
        enum: ['Aberto', 'Fechado', 'Cancelado'],
        default: 'Aberto'
    },
    createDate:{
        type: Date,
        default: Date.now,
        require: true
    }
});

module.exports = mongoose.model('Order', schema);