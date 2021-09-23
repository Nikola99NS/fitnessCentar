var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

const komentari = [];


router.post('/', (req, res) => {
    let komentar = req.body
    console.log(req.body)
        // console.log("nesto1")
        // if (komentar.id) {
        //     return res.status(400)
        //         .json({ msg: 'Product seems to already have an id assigned' });
        // }

    komentari.push(komentar);
    return res.status(200).json(komentar);

});

router.get('/', (req, res) => {
    console.log(komentari)
    return res.status(200).json(komentari);
});

module.exports = router;