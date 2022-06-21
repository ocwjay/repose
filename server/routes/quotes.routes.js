const QuotesController = require('../controllers/quotes.controller');

module.exports = (app) => {
    app.get('/api/quotes', QuotesController.getQuotes);
    app.get('/api/quotes/:id', QuotesController.getQuoteById);
    app.post('/api/quotes', QuotesController.createQuote);
    app.put('/api/quotes/:id', QuotesController.updateQuote);
    app.delete('/api/quotes/:id', QuotesController.deleteQuote);
}