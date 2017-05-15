const express = require('express');
const router = express.Router();
const config = require('../config.js')

router.get('/', (req, res)=>{
    if(req.session.user)
        res.redirect('/');
    else
        res.render('login');
});
router.post('/doLogin', (req, res)=>{

    let id = req.body.id;
    let pw = req.body.password;
    let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if(id.match(regExp)){
        if(id === config.manager_id && pw === config.manager_pw){
            console.log('login success');
            req.session.user = {
                id :id,
                name : 'manager',
                authorized : true
            }
            res.redirect('/');
        }
        else{
            console.log(id +' : '+ pw);
            res.redirect('/login/fail');
        }
    }
});

router.get('/doLogout', (req, res)=>{
    if(req.session.user){
        console.log(req.session.user.name+' logout!');

        req.session.destroy((err)=>{
            if(err)
                throw err;
            
            console.log(' delete session & logout');
            res.redirect('/');
        })
    }
    else{
        console.log('no login session');
        res.redirect('/');
    }
    
});

router.get('/fail', (req, res)=>{
    res.render('login', {
        failMsg : 'You are not an administrator.'
    })
})
module.exports = router;