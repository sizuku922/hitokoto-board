const express = require('express');
const path = require('path');
const app = express();
const posts = [];

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: false, limit: '4kb' }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', { posts, error: null });
});

app.post('/posts', (req, res) => {
  const name = String(req.body.name || '').trim().slice(0, 20) || '匿名';
  const message = String(req.body.message || '').trim();
  if (!message || message.length > 200) {
    return res.status(400).render('index', {
      posts,
      error: '投稿内容を1〜200文字で入力してください。'
    });
  }
  posts.unshift({ name, message, date: new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' }) });
  if (posts.length > 50) posts.pop();
  res.redirect('/');
});

const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => console.log(`Listening on port ${port}`));
