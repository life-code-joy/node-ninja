const express = require('express');

const app = express();
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/home', (req, res) => {
  res.render('home', { title: 'Home' });

  res.end();
});
app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });

  res.end();
});
app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact' });

  res.end();
});

app.listen(3000);
