const express = require('express');
const router = express.Router();

let database;
let SayingSchema;
let SayingModel

router.init  = function(db, schema, model){

    console.log('saying init 호출됨');

    database = db;
    SayingSchema = schema;
    SayingModel = model;

}

router.get('/', (req, res)=>{

    res.send('saying ok!');
    res.end();
});

router.get('/:id', (req, res)=>{

    let id = req.params.id;
    res.send(id);
});

module.exports = router;