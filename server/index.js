const express = require('express');
const app = express();

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'beer1ben',
    database: 'way2go',
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
    connection.query("SELECT * FROM supplayer", (error,rows, fields)=>{
        if (error) {
            console.log('error in query');
        }else{
            console.log('success queryn')
            console.log(rows)
            res.send(rows[2].supply_name)
            // console.log(fields)
        }
    })
   
    

});

let port = process.env.PORT || 5050;

app.listen(port, function () {
    console.log('we on', port)


})
