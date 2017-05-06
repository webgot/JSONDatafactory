const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.app.get('database'));
  let = req.app.get('database');
  
  res.send('preparing users service');
});

router.get('/:id', function(req, res, next) {
 
  let id = req.params.id;

  res.send('id : '+id+'preparing users service');
});

module.exports = router;
