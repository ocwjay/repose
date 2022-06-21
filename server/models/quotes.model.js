const mongoose = require("mongoose");

const QuoteSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    quote: {
        type: String,
    },
    source: {
        type: String,
    },
    link: {
        type: String,
    },
}, {})

const Quote = mongoose.model('Quote', QuoteSchema);
module.exports = Quote;