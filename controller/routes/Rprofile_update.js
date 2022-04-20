var express = require('express');
var router = express.Router();

router.get('/', (req,res)=>{
    res.render('prof_after_Registration');
})

module.exports = router;