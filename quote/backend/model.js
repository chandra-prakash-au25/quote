const mongoose = require('mongoose');

const quotesSchema = new mongoose.Schema({

  quote: {
    type: String
  },
  author: {
    quote:String
  }
});

const quotes = mongoose.model('Quotes', quotesSchema);

module.exports = quotes;
