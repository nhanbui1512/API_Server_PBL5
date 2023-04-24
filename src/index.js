const express = require('express');
const path = require('path');
const port = 3000;
const app = express();
const cors = require('cors');
const route = require('./routes');

const db = require('./Config/Db')



app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

db.connect

app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    }),
);
route(app);

app.listen(port, () => {
    console.log(`Listening at localhost:${port}`);
});
