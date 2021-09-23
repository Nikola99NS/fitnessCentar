var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

var users = {};
const korisnici = []
var trenutniUser;
var pincode = 0

router.post('/login', (req, res) => {
    var user = req.body;
    if (users[user.username] && users[user.username] === user.password) {
        trenutniUser = user;
        pincode = Math.floor(Math.random() * 1000)
        console.log(pincode)
        res.json({
            pin: pincode,
            msg: 'Successfully logged in, vaš PIN je ' + pincode + ', upamtite ga zbog kupovine proizvoda.',
            token: jwt.sign({ user: user.username }, 'SECRET'),
            trenutniUser: trenutniUser,


        });
    } else {
        res.status(400).json({ msg: 'Invalid username or password' });
    }
});

router.post('/register', (req, res) => {
    var user = req.body;
    if (users[user.username]) {
        res.json({ msg: 'User already exists, please login.' });
    } else {
        users[user.username] = user.password;
        res.json({
            msg: 'Successfully created user, please login'
        });
    }
    korisnici.push(req.body)
});


router.get('/', (req, res) => {
    console.log(korisnici)
    return res.status(200).json(korisnici);
});


router.get('/:username', (req, res) => {
    let productId = req.params.id;
    const foundProduct = products.find((product) => product.id == productId);
    if (foundProduct) {
        res.json(foundProduct);
    } else {
        return res.status(400).json({ msg: 'Product with id ' + productId + ' not found.' })
    }
});

module.exports = router;