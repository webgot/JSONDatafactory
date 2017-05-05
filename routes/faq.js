var express = require('express');
var router = express.Router();

router.get('/', (req, res)=>{
    res.send('preparing faq service..');
});
router.get('/:id', (req, res)=>{
    let id = req.params.id;
    res.send('id : '+id+'\n preparing faq service...');
});

module.exports = router;