const express = require('express');
const router = express.Router();

let database;
let FaqSchema;
let FaqModel
router.init  = function(db, schema, model){

    console.log('Faq init 호출됨!');
    database = db;
    FaqSchema = schema;
    FaqModel = model;

}

router.get('/', (req, res)=>{
    res.send('preparing faq service..');
});
router.get('/:id', (req, res)=>{
    let id = req.params.id;
    res.send('id : '+id+'\n preparing faq service...');
});


module.exports = router;