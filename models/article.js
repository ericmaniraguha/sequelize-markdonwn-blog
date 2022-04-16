const mongoose = require('mongoose');
const articleSchema = new mongoose.Schema({
  title: {
    type: 'string',
    required: true,
  },
  description: {
    type: 'string',
  },
  markdown: {
    type: 'string',
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model('Article', articleSchema);
