const mongoose = require('mongoose');

var attireSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    idSeller: mongoose.Schema.Types.ObjectId,
    idType: mongoose.Schema.Types.ObjectId,
    trademark: String,
    name: String,
    price: String,
    size: String,
    description: String,
    sale: Number,
    total: Number,
    createdAt: Date,
    updatedAt: Date,
});

var Attire = mongoose.model('Attire', attireSchema, 'attire');
module.exports = Attire;