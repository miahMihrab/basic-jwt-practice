const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

if (typeof localStorage === "undefined" || localStorage === null) {
    const LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}

router.get('/login', (req, res) => {
    res.render('login');
})

router.post('/login', (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email
    }
    jwt.sign({
        user
    }, 'secretkey', (err, token) => {
        localStorage.setItem('token', token);
        //console.log(localStorage.getItem('token'));
        res.redirect('/post')
    })

})

module.exports = router;