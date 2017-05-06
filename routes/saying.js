const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{

    res.send('saying ok!');
    res.end();
});

router.get('/:id', (req, res)=>{

    let id = req.params.id;
    res.send(id);
});

module.exports = router;