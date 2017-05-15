const express = require('express');
const router = express.Router();
const config = require('../config.js')
const async = require('async');

router.get('/', (req, res)=>{
    if(req.session.user)
        res.redirect('/');
    else
        res.render('login');
});
router.post('/doLogin', (req, res)=>{

    let format = false;
    let id = req.body.id;
    let pw = req.body.password;
    let regex=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
   
    //check email format
    if(regex.test(id) === true){
        if(id == config.manager_id && pw == config.manager_pw){
            console.log('login success');
            req.session.user = {
                id :id,
                name : 'manager',
                authorized : true
            }
            res.redirect('/');
        }
        else{
            console.log('login fail');
            res.redirect('/login/fail');
        }
    }   
    else{
        console.log('asda');
        res.redirect('/login/fail');
    } 
   
});

router.get('/doLogout', (req, res)=>{
    
    //if has user login session
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