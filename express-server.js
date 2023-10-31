const express = require('express');

const app = express();
const PORT = 7777;

app.listen(PORT, () => {
    console.log('Express server running on:', PORT);
});

app.get('/home/:fruit', (req, res) => {
    res.status(200).json({page: req.params.fruit});
});

app.get('/home', (req, res) => {
    res.status(200).json({page: 'home'});
});
