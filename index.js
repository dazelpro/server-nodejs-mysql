const express       = require('express');
const app           = express();

require('./app-routes/route-karyawan')(app);

app.listen(8080, ()=>{
    console.log('Server Berjalan di Port : 8080');
}); 

// Created By : kodemin.blogspot.com