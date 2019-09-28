const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/post', verifytoken, (req, res) => {

})


function verifytoken(req, res, next) {

    jwt.verify(localStorage.getItem('token'), 'secretkey', (err, authdata) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.render('post', {
                data: [{
                    message: "Post created...",
                    name: authdata.user.name
                }]


            })
            // res.json({
            //     message: "Post created...",
            //     authdata
            // })
        }
    });
    next();
}

module.exports = router;