const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Basic security provided by express.js
app.disable('x-powered-by');

// Using static files in Universarium requirements path and express
app.use(express.static(path.join(__dirname, 'App')));
app.use(express.static(path.join(__dirname, 'Assets')));
app.use(express.static(path.join(__dirname, 'Script')));
app.use(express.static(path.join(__dirname, 'Styles')));

// When client lands on '/' render him ./App/App.html
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'App/App.html')));

// Running up the app
app.listen(port, () => console.log(`Universarium app listening on port ${port}!`));
