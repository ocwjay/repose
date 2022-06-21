const Quote = require('../models/quotes.model');

module.exports = {
    getQuotes: (req, res) => {
        Quote.find({})
            .then((quotes) => {
                res.json(quotes);
            })
            .catch((err) => {
                res.status(400).json({ message: "Something went wrong in getQuotes", error: err });
            });
    },
    createQuote: (req, res) => {
        Quote.create(req.body)
            .then(newQuote => {
                res.status(201).json(newQuote);
            })
            .catch((err) => {
                res.status(400).json({ message: "Something went wrong in createQuote", error: err });
            });
    },
    getQuoteById: (req, res) => {
        Quote.findOne({ id: req.params.id }) //HAVE TO USE ID NOT _ID OR THIS WILL GET COMPLICATED
            .then(quote => {
                res.json(quote);
            })
            .catch((err) => {
                res.status(400).json({ message: "Something went wrong in getQuoteById", error: err });
            });
    },
    deleteQuote: (req, res) => {
        Quote.deleteOne({ _id: req.params.id })
            .then(quote => {
                res.json(quote);
            })
            .catch((err) => {
                res.status(400).json({ message: "Something went wrong in deleteQuote", error: err });
            });
    },
    updateQuote: (req, res) => {
        Quote.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true})
            .then(quote => {
                res.json(quote);
            })
            .catch((err) => {
                res.status(400).json({ message: "Something went wrong in updateQuote", error: err });
            });
    },
};