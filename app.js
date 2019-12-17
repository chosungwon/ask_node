const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors('*'));

app.use(bodyParser.json());

app.use(express.json());

app.listen(3001, () => {
    console.log("Express server has started on port 3001");
});

app.post('/register', (req, res) => {
    console.log(req.body);
    res.send(req.body);

});
