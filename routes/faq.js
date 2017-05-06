const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    console.log(req.app.get('database'));
    res.send('preparing faq service..');
    
});
router.get('/:id', (req, res)=>{
    let id = req.params.id;
    res.send('id : '+id+'\n preparing faq service...');
});


module.exports = router;