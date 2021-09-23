var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

const treninziMap = new Map([
    ["Ponedeljak:17", {
        "tip": "CORE",
        "brMesta": 20,
        korisnici: []
    }],
    ["Ponedeljak:18", {
        "tip": "STRENGTH",
        "brMesta": 10,
        korisnici: []
    }],
    ["Ponedeljak:19", {
        "tip": "CARDIO",
        "brMesta": 15,
        korisnici: []
    }],
    ["Utorak:17", {
        "tip": "STRENGTH",
        "brMesta": 10,
        korisnici: []
    }],
    ["Utorak:18", {
        "tip": "CARDIO",
        "brMesta": 15,
        korisnici: []
    }],
    ["Utorak:19", {
        "tip": "STRENGTH",
        "brMesta": 10,
        korisnici: []
    }],
    ["Sreda:17", {
        "tip": "CARDIO",
        "brMesta": 15,
        korisnici: []
    }],
    ["Sreda:18", {
        "tip": "CORE",
        "brMesta": 20,
        korisnici: []
    }],
    ["Sreda:19", {
        "tip": "STRENGTH",
        "brMesta": 10,
        korisnici: []
    }],
    ["Cetvrtak:17", {
        "tip": "CORE",
        "brMesta": 20,
        korisnici: []
    }],
    ["Cetvrtak:18", {
        "tip": "STRENGTH",
        "brMesta": 10,
        korisnici: []
    }],
    ["Cetvrtak:19", {
        "tip": "CARDIO",
        "brMesta": 15,
        korisnici: []
    }],
    ["Petak:17", {
        "tip": "CORE",
        "brMesta": 20,
        korisnici: []
    }],
    ["Petak:18", {
        "tip": "CARDIO",
        "brMesta": 15,
        korisnici: []
    }],
    ["Petak:19", {
        "tip": "STRENGTH",
        "brMesta": 10,
        korisnici: []
    }],

])



router.post('/rezervisiTrening', (req, res) => {
    // console.log("Svi treninzi: ", treninziMap);



    var body = req.body;
    var dan = body.dan;
    var sat = body.sat;
    var user = body.username;
    if (body.addDel == 'dodaj') {
        var trening = treninziMap.get(dan + ":" + sat);
        if (trening.brMesta > 0 && !trening.korisnici.includes(user)) {

            trening.brMesta--;
            trening.korisnici.push(user);

            // console.log("Trening: ", trening);

            res.json({
                dan: dan,
                brMesta: trening.brMesta,
                msg: "Uspesno ste rezervisali trening za "
            })

        } else if (trening.brMesta < 1 || trening.korisnici.includes(user)) {
            res.json({
                dan: dan,
                brMesta: trening.brMesta,
                msg: "Niste ni rezervisali, ili je popunjen termin "
            })
        }
    } else if (body.addDel == 'ukloni') {
        var trening = treninziMap.get(dan + ":" + sat);
        if (trening.brMesta < 20 && trening.brMesta > -1 && trening.korisnici.includes(user)) {
            trening.brMesta++;
            trening.korisnici.shift(user);
            res.json({
                dan: dan,
                brMesta: trening.brMesta,
                msg: 'Uspesno ste otkazali trening za '
            })
        } else if (!trening.korisnici.includes(user)) {
            res.json({
                dan: dan,
                brMesta: trening.brMesta,
                msg: 'Niste rezervisali trening za  '
            })
        }

    }
});

router.get('/treninzi', (req, res) => {
    let listaTreninga = [];
    for (let [key, value] of treninziMap) {
        var keyItems = key.split(":");
        var dan = keyItems[0];
        var sat = keyItems[1];

        var trn = {
            tip: value.tip,
            dan: dan,
            sat: sat,
            brMesta: value.brMesta,
            korisnici: value.korisnici
        }

        listaTreninga.push(trn);
    }

    // console.log("Lista treninga: ", listaTreninga);

    return res.status(200).json(listaTreninga);
});

// router.get('/korisnici', (req, res) => {
//     var trening = treninziMap.get(req.body.dan + ":" + req.body.sat);

//     return res.status(200).json(trening.korisnici);
// });

module.exports = router;