const express = require('express');
const app = express();

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'school',
});

connection.connect(function (error) {
    if (!!error) {
        console.log('error');
    }else{
        console.log('connected')
    }
})

app.use(express.static("public"));

app.get('/', (req, res) => {
    // res.send(`we on ${port}`)
    connection.query("SELECT * FROM school", Function(error,rows, fields))
    //calback function
    if (!!error) {
        console.log('error in query');
    }else{
        console.log('success query')
    }

});

let port = process.env.PORT || 5050;

app.listen(port, function () {
    console.log('we on', port)


})
