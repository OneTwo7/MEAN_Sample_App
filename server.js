const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.locals.basedir = path.join(__dirname, 'public');

app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/partials/:partialPath', (req, res) => {
  res.render(path.join('partials', req.params.partialPath));
});

app.get('/', (req, res) => {
  res.render('main');
});

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Listening on port ${PORT}...`);
  }
});
