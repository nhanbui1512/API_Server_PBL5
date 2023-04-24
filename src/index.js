const express = require('express');
const path = require('path');
const port = 3000;
const app = express();
const route = require('./routes');

app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
route(app);

app.listen(port, () => {
    console.log(`Listening at localhost:${port}`);
});
