const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('information is coomming soon...');
});



module.exports = router;