const express = require('express');
const mongoose = require('mongoose');

const app = express();
const db = require('./config/keys.js').mongoURI
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log("Connected to the MongoDB worked"))
    .catch(err => console.log(err))
const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('boi, whats up?'));
app.listen(port, () => console.log(`Server is running on port: ${port}`));