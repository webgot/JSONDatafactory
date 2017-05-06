const express = require('express');
const readline = require('readline');
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res)=>{

    res.send('saying ok!');
    res.end();
});

router.get('/:id', (req, res)=>{

    let id = req.params.id;
    let db = req.app.get('database');
    let SayingModel = db.SayingModel; 
    
    SayingModel.findAll((err, result)=>{
        console.log(result);
    })

    res.send(id);
});
router.post('/', (req, res)=>{
    
    //post막아놓음
    res.redirect('/');
    return ;

    console.log('출력 되면 안돼');

    const rl = readline.createInterface({
        input : fs.createReadStream('public/data/sayings.txt')
    });

    let SayingModel = req.app.get('database').SayingModel; 
    let nextPerson = false;
    let cnt = 0;
    let content='';
    let name = '';
    let u_id = 1;
    let id = 1;

    rl.on('line', (line)=>{
    
        //빈줄 처리
        if(line.length > 0){
            
            //명언인경우
           if(nextPerson == false){
                content = line;
                nextPerson = true;
           }
           //이름인 경우
           else if(nextPerson === true){
               name = line.substring(2, line.length);
               nextPerson = false;
           }
           ++cnt;
           if(cnt == 2){
                let curSaying = new SayingModel({'userId' : u_id, 'id' : id,'name' : name, 'content' : content});
                
                //데이터 저장
                curSaying.save((err, data)=>{
                    if(err)
                        throw err;
                    //console.log(data);       
                });

                cnt = 0;
                ++id;
                if( id%5 == 0) ++u_id;                
           }
        }
    })
   
    
})

module.exports = router;