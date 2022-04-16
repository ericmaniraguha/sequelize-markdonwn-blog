const express = require('express');
const mongoose = require('mongoose');
const Articles = require('./models/article');
const articleRouter = require('./routes/articles');
const app = express();

mongoose.connect('mongodb://localhost/express_mongodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
  const articles = await Articles.find().sort({
    createdAt: 'desc',
  });
  res.render('articles/index', { articles: articles });
});

app.use('/articles', articleRouter);

app.listen(5000);
