const express = require('express');
const path = require('path');
const port = 3000;
const app = express();
const cors = require('cors');
const route = require('./routes');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const db = require('./Config/Db');

const hbs = require('express-handlebars');



app.use(cookieParser())
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false,
  
}))

app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

db.connect;

app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.engine(
    'hbs',
    hbs.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'Resource/views'));

route(app);

app.listen(port, () => {
    console.log(`Listening at localhost:${port}`);
});
