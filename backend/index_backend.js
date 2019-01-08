const express = require('express');
const bcrypt = require('bcrypt');
const User = require('./models/user');
const promise = require('bluebird')
var cors = require('cors');
var bodyParser = require('body-parser');
const app = express();
let options = {promiseLib : promise}
let pgp = require('pg-promise')(options)
let connectionString = 'postgres://localhost:5432/class_tracker'
let db = pgp(connectionString)
app.use(bodyParser.json())
app.use(cors())



app.get('/users',function(req,res){
  
  db.any('SELECT * FROM users')
    .then(function(result){
      res.json(result)
    })
})

app.get('/week_1',function(req,res){
  
  db.any('SELECT * FROM week_1')
    .then(function(result){
      res.json(result)
    })
})


// app.post('/login', function(req, res){
//   console.log('test');
//   res.end(); // end the response
// });

app.post('/VeryLost', function(req, res){

  db.any("INSERT INTO week_1 (very_lost, first_name, last_name, week_num, comments) VALUES ($1, $2, $3, $4, $5)", [req.body.counter, req.body.user.first_name, req.body.user.last_name, req.body.user.week_number, req.body.user.comments])

  console.log('very lost posting')
  res.end();
})

app.post('/SortOfGettingIt', function(req, res){
  db.any("INSERT INTO week_1 (sort_of_getting_it, first_name, last_name, week_num, comments) VALUES ($1, $2, $3, $4, $5)", [req.body.counter, req.body.user.first_name, req.body.user.last_name, req.body.user.week_number, req.body.user.comments])

  console.log('sort of posting')
  res.end();
})

app.post('/GettingIt', function(req, res){
  db.any("INSERT INTO week_1 (getting_it, first_name, last_name, week_num, comments) VALUES ($1, $2, $3, $4, $5)", [req.body.counter, req.body.user.first_name, req.body.user.last_name, req.body.user.week_number, req.body.user.comments])

  console.log('getting it posting')
  res.end();
})

app.listen(5000,function(req,res){
  console.log("Server has started...")
})