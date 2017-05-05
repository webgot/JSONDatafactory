const express = require('express');
const router = express.Router();

let database;
let UserSchema;
let USerModel
router.init  = function(db, schema, model){

    console.log('users init 호출됨');
    database = db;
    UserSchema = schema;
    UserModel = model;

}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('preparing users service');
});

router.get('/:id', function(req, res, next) {
 
  let id = req.params.id;

  res.send('id : '+id+'preparing users service');
});

module.exports = router;
