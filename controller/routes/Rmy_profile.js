require('./src/dbconnection/mongo_connection');
const express = require('express');
const router  = express.Router();
const upload  = require('./controller/middlewares/upload');


router.get('/', (req,res)=>{
    res.render('my_profile');
});

app.post('/', upload.single('image'), (req, res, next) => {
    console.log(req.file.filename);
      var obj = {
          fullname: req.body.fullname,
          Headline: req.body.Headline,
          position : req.body.position,
          github : req.body.github,
          instagram : req.body.instagram,
          facebook : req.body.facebook,
          twitter : req.body.twitter,
          edu10 : req.body.edu10,
          edu10Mark : req.body.edu10Mark,
          edu12 : req.body.edu12,
          edu12Mark : req.body.edu12Mark,
          location : req.body.location,
          img: {
              data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
              contentType: 'image/png'
          }
      }
      imgModel.create(obj, (err, item) => {
          if (err) {
              console.log(err);
          }
          else {
              // item.save();
              res.redirect('home');
          }
      });
  });



module.exports = router;