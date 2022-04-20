require('dotenv/config');
// require("./src/dbconnection/mongo_connection");
require('./src/dbconnection/mongo_connection')
const express   = require('express');
const app       = express();
const path      = require('path');
const hbs       = require('hbs');
const bodyParser  = require('body-parser');
const fs          = require('fs');
const port = process.env.PORT;

const partialsPath = path.join(__dirname, "../ishty/views/partials");
hbs.registerPartials(partialsPath);
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//  routing here 
const loginRoute                = require('./controller/routes/Rlogin');
const dashbordRoute             = require('./controller/routes/Rdashbord');
const blogRoute                 = require('./controller/routes/Rblog');
const about_usRoute             = require('./controller/routes/Rabout_us');
const servicesRoute             = require('./controller/routes/Rservices');
const sign_inRoute              = require('./controller/routes/Rsign_in');
const homeRoute                 = require('./controller/routes/Rhome');
const connectionRoute           = require('./controller/routes/Rconnection');
const messageRoute              = require('./controller/routes/Rmessaege');
const notificationRoute         = require('./controller/routes/Rnotification');
const my_profileRoute           = require('./controller/routes/Rmy_profile');

app.use('/', dashbordRoute);
app.use('/login', loginRoute);
app.use('/blog', blogRoute);
app.use('/about_us', about_usRoute);
app.use('/services', servicesRoute);
app.use('/sign_in', sign_inRoute);
app.use('/home', homeRoute);
app.use('/connection', connectionRoute);
app.use('/message', messageRoute);
app.use('/notification', notificationRoute);
app.use('/my_profile', my_profileRoute);







app.listen(port,()=>{
    console.log(`server is runing on port ${port}`)
})