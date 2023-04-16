const express = require('express');
const path = require('path');
const port = 3000;
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Listening at localhost:${port}`);
});
