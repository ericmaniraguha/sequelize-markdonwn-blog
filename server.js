const express = require('express');
const mongoose = require('mongoose');

const articleRouter = require('./routes/articles');
const app = express();

mongoose.connect('mongodb://localhost/express_mongodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  const articles = [
    {
      title: 'Test our article 1',
      createdAt: new Date(Date.now()),
      description: 'Test description 1 ()',
    },
    {
      title: 'Test our article 2',
      createdAt: new Date(),
      description: 'Test description 2',
    },
    {
      title: 'Test our article 3',
      createdAt: new Date(Date.now()),
      description: 'Test description 3',
    },
  ];
  res.render('articles/index', { articles: articles });
});

app.use('/articles', articleRouter);

app.listen(5000);
