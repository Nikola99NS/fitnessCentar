const express = require('express')
const bodyParser = require('body-parser');

const PORT = 3000
const api = require('./routes/api')
const app = express()

var cors = require('cors')
app.use(cors())

app.use(bodyParser());

app.use('/api', api)
app.use('/api/user', require('./user'));
app.use('/api/treneri', require('./treneri'));
app.use('/api/products', require('./products'));
app.use('/api/komentari', require('./komentari'));
app.use('/api/trening', require('./trening'));


app.get('/', function(req, res) {
    res.send('Hello from server')
})

app.listen(PORT, function() {
    console.log('Server running on localhost:' + PORT)
})