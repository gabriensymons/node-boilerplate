const express = require('express');
const bodyParser = require('body-parser');
const reload = require('reload');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use('/src', express.static(`${__dirname}/src`));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: '.'});
});

const server = app.listen(5000, () => {
  console.log('Node server listening on port 5000');
});

// automatically reload the app when nodemon restarts the server
reload(app);


/* =============

In terminal:
1. cd to project directory
2. Run: npm start
    Note:
    nodemon restarts the server when the watched files change
    reload refreshes the browser when nodemon restarts the server
3. End server with CTRL + C

================ */