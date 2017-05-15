const express = require('express');
const async = require('async');
const router = express.Router();

router.get('/', function(req, res, next) {

  let SayingModel = req.app.get('database').SayingModel;
  async.parallel([
    function(callback){
      SayingModel.findAll((err, data1)=>{
        if(err)
          throw err;
          callback(null, data1);
      });
    }], 
    function(err, data3){
      if(err)
        throw err;
      res.render('index',{
        title : 'JSONDatafactory',
        sayingcount : data3[0].length
      });  
  });
});

module.exports = router;
