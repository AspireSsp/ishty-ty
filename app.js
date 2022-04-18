console.log("hi ishty");
const express = require('express');
var app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require("./src/db/connection");
const path = require('path');
const hbs = require('hbs');
const fs = require('fs');
var multer = require('multer');

const port = process.env.PORT || 3000;
const Register = require("./src/models/register");


const partialsPath = path.join(__dirname, "../ishty/views/partials");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use(express.static(__dirname + "public"));
app.use(express.static(path.join(__dirname, "/public")));
hbs.registerPartials(partialsPath);
app.set("view engine", "hbs");

///        routing starts here
app.get("/", (req, res) => {
  res.render("dashbord");
});
app.get("/login", (req, res) => {
  res.render("login");
});

let userData;
let userFullName;
let userUniqueName;
let userEmail;
app.post("/login", async (req, res) => {
  try {
    const username = req.body.username;
    const Password = req.body.password;
    // console.log(Username + " " +Password)
    userData = await Register.findOne({ username });
    userFullName = userData.fullname;
    userUniqueName = userData.username;
    userEmail = userData.email;

    console.log(userData.email);
    console.log(userData.password);

    if (userData.password === Password) {
      res.status(201).render("home", {
        user_fullname: userData.fullname,
        user_email: userData.email,
        user_username: userData.username,
      });
    } else {
      res.render("login", {
        msgferr: "wrong password...",
      });
    }
  } catch (err) {
    // console.log(err);
    res.status(401).render("login", {
      msgferr: "user not found..",
    });
  }
});

app.get("/registration", (req, res) => {
  res.render("registration");
});

app.post("/registration", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.pass;
    const cnfpass = req.body.cnfpass;
    const userdata = await Register.findOne({ username });

    if (userdata) {
      res.status(401).render("registration", {
        uniquser: "user name must be unique..",
      });
    } else {
      if (password === cnfpass) {
        const registeruser = new Register({
          fullname: req.body.fullname,
          username: req.body.username,
          email: req.body.email,
          phone: req.body.phone,
          password: req.body.pass,
          cnfpassword: req.body.cnfpass,
          gender: req.body.gender,
        });
        const registerd = await registeruser.save();
        res.status(201).render("home", {
          user_fullname: req.body.fullname,
          user_email: req.body.email,
          user_username: req.body.username,
        });
      } else {
        res.render("registration", {
          cnfpasserr: "confirm password are not matched...",
        });
      }
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get("/blog", (req, res) => {
  res.send(" <h1>blogs are posted soon</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1> we will provide about us information soon </h1>");
});
app.get("/services", (req, res) => {
  res.send(" <h1>We will provide our services detailes soon </h1>");
});

///      routes after login in nav page

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/connection", (req, res) => {
  res.render("connection");
});

app.get("/message", (req, res) => {
  res.render("message");
});

app.get("/notification", (req, res) => {
  res.render("notification");
});


//              routing for update detailes  ....  //

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


var multer = require('multer');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now())
  }
});

var upload = multer({ storage: storage });
var imgModel = require('./src/models/profileInfo');

app.get("/UpdateProfile", (req, res) => {
  res.render("prof_after_Registration", {
    user_fullname: userFullName,
    user_username: userUniqueName,
  });
});

app.post('/UpdateProfile', upload.single('image'), (req, res, next) => {
  console.log(req.file);
  console.log(req.body.fullname);
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
            res.render('home');
        }
    });
});

app.listen(port, () => {
  console.log(`server is running on port ${port} `);
});
