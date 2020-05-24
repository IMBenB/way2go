const express = require('express');
const app = express();
const cors = require("cors");

const mysql = require('mysql');

app.use(express.static("public"));
app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'beer1ben',
    database: 'way2go',
});

connection.connect(function (error) {
    if (!!error) {
        console.log('error in mysql connection');
    }else{
        console.log('connected to mysql')
    }
})


app.get('/', (req, res) => {
    // res.send(`we on ${port}`)
    connection.query("SELECT * FROM school", (error,rows, fields)=>{
        if (error) {
            console.log('error in query');
        }else{
            console.log('success queryn')
            console.log(rows)
            res.send(rows[1].more_data)
            // console.log(fields)
        }
    })
   
    

});

let port = process.env.PORT || 5050;

app.listen(port, function () {
    console.log('we on', port)


})
