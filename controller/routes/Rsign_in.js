const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('sign_in');
});



module.exports = router;