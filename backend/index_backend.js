const express = require('express');
const bcrypt = require('bcrypt');
const User = require('./models/user');
const promise = require('bluebird')
var cors = require('cors')
const app = express();
let options = {promiseLib : promise}
let pgp = require('pg-promise')(options)
let connectionString = 'postgres://localhost:5432/class_tracker'
let db = pgp(connectionString)
app.use(cors())
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views','./views')


// app.get('/',function(req,res){
//   res.send('hello server')

// })

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


app.post('/login', function(req, res){
  console.log('test');
  res.end(); // end the response
});

app.post('/VeryLost', function(req, res){
  db.any("INSERT INTO week_1 (uid, first_name, last_name, very_lost, week_num, comments) VALUES ('bnew', 'Brent', 'Newman', 1, 1, 'bla bla')")

  console.log('very lost posting')
  res.end();
})

app.post('/SortOfGettingIt', function(req, res){
  db.any("INSERT INTO week_1 (uid, first_name, last_name, sort_of_getting_it, week_num, comments) VALUES ('bnew', 'Brent', 'Newman', 1, 1, 'bla bla')")

  console.log('sort of posting')
  res.end();
})

app.post('/GettingIt', function(req, res){
  db.any("INSERT INTO week_1 (uid, first_name, last_name, getting_it, week_num, comments) VALUES ('bnew', 'Brent', 'Newman', 1, 1, 'bla bla')")

  console.log('getting it posting')
  res.end();
})

app.listen(5000,function(req,res){
  console.log("Server has started...")
})