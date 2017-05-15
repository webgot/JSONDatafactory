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

    var id = req.body.id;
    let pw = req.body.password;
    var regExp = /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/i;
     
    if(regExp.test(id) === false)
        res.redirect('/login/fail');
    
    else if(id === config.manager_id && pw === config.manager_pw){
        console.log('login success');
        req.session.user = {
            id :id,
            name : 'manager',
            authorized : true
        }
        res.redirect('/');
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