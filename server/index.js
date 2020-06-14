const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require('mysql');

app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());


const connection = mysql.createConnection({
    // host: 'sql202.unaux.com',
    // user: 'unaux_25921501',
    // password: 'beer4567',
    // database: 'unaux_25921501_way2go'
    host: 'localhost',
    user: 'root',
    password: 'beer4567',
    database: 'way2go',
    port: 3306
});

connection.connect(function (error) {
    if (!!error) {
        console.log('error in mysql connection');
        // console.log(error);
    } else {
        console.log('connected to mysql')
    }
})

//login/////////////////////////
app.post('/', (req, res) => {

    let body = req.body;

    // console.dir('--------')
    // console.log(body.data)
    // console.log(body.data.name)
    // console.log(body.data.password)
    // console.log(body.data.title)
    // console.dir('--------')

    connection.query(`SELECT * 
                        FROM ${body.data.title}
                        WHERE name= '${body.data.name}'`, (err, results) => {

        try {

            if (body.data.password == results[0].password) {

                console.log('success query')
                let check = { results, isOK: true }
                res.json(check)

                // console.log(results)
            } else {
                let check = { results, isOK: false }
                res.json(check)
                console.log('password incorrect]');
            }
        }


        catch (err) {
            console.log('err')
            let check = { results, isOK: false }
            res.json(check)
        }

    })



});
//end login/////////////


//get orders//////////////////

app.post('/getOrders', (req, res) => {
    let body = req.body
    console.log('school name getOrders')
    console.log(body.schoolName)
    connection.query(`SELECT * 
    FROM way2go.orders
    WHERE school_name= '${body.schoolName}'`, (err, results) => {

        try {
            console.log(results)


                console.log('success get data')
                let check = { results, isOK: true }
                res.json(check)

        }


        catch (err) {
            console.log('err')
            let check = { results, isOK: false }
            res.json(check)
        }

    })
})

//end get orders//////////////////





// save orders/////////////////////
app.post('/orderForm', (req, res) => {
    let body = req.body;
    let lastID = 0;
    // console.log(body);
    connection.query(`SELECT id
     FROM way2go.orders
     order by id desc
     limit 1`, (err, high) => {
        lastID = high[0].id
        // console.log(lastID)

        // console.log(lastID)
        connection.query(`INSERT INTO way2go.orders (id, school_name, school_City,
            school_Street, school_Number,school_Symbol, orderby_name, orderby_position, orderby_phone, order_objective, order_type,
            ordertravel_date, ordertravel_day, pickuponly, ordertravel_time,
            order_students_number, order_destanation, order_address, order_return_time,
            order_comments,order_contact_name, order_contact_position, 
            order_contact_phone, distance
    ) 
        VALUES 
        ('${lastID + 1}','${body.orderData.schoolName}','${body.orderData.schoolCity}',
        '${body.orderData.schoolStreet}','${body.orderData.schoolNumber}','${body.orderData.schoolSymbol}','${body.orderData.orderName}',
        '${body.orderData.orderPosition}','${body.orderData.orderPhone}','${body.orderData.orderObjective}','${body.orderData.orderType}',
        '${body.orderData.orderDate}','${body.orderData.orderDay}','${body.orderData.orderPickuponly}','${body.orderData.orderTime}',
        '${body.orderData.orderStudents}','${body.orderData.orderTripA}','${body.orderData.orderAddressA}','${body.orderData.orderReturnTimeA}',
        '${body.orderData.orderComments}','${body.orderData.orderContact}','${body.orderData.orderContactPosition}',
        '${body.orderData.orderContactPhone}','${body.orderData.distanceA}'
    )`)
    });
    let isData = { body, isOK: true }
    res.json(isData)


});
//end save orders////////



let port = process.env.PORT || 5050;

app.listen(port, function () {
    console.log('we on', port)


})
