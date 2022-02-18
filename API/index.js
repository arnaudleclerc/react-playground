const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

// enable CORS (in production, modify as to allow only designated origins)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// exposed API endpoint
app.get('/api/201',

    (req, res) => {

        console.log('Call to /api/201');
        console.log('Returning 201');

        res.status(201).json();
    }
);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Listening on port ' + port);
});

module.exports = app;