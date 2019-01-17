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



// app.get('/users',function(req,res){
  
//   db.any('SELECT * FROM users')
//     .then(function(result){
//       res.json(result)
//     })
// })

// app.get('/week_1_verylost',function(req,res){
//   db.any("SELECT COUNT(very_lost) FROM verylost WHERE week_num='1'")
//     .then(function(verylostResult){
//       res.json(verylostResult)
//       console.log(verylostResult)
//     })
// })


app.get('/weekNumCountVeryLost',function(req,res){
  db.any("SELECT COUNT(id) FROM verylost")
    .then(function(verylostResult){
      res.json(verylostResult)
    })
})

app.get('/weekNumCountSortOf',function(req,res){
  db.any("SELECT COUNT(id) FROM sortofgettingit")
    .then(function(sortofResult){
      res.json(sortofResult)
    })
})

app.get('/weekNumCountGettingIt', function(req,res){
  db.any("SELECT COUNT(id) FROM gettingit")
  .then(function(gettingitResult){
    res.json(gettingitResult)
  })

})

//app.get statement for selecting names from each table
app.get('/veryLostNames', function(req,res){
  db.any("SELECT first_name, last_name, comments FROM verylost")
  .then(function(veryLostNamesResult){
    res.json(veryLostNamesResult)

  })
})

app.get('/sortOfGettingItNames', function(req,res){
  db.any("SELECT first_name, last_name, comments FROM sortofgettingit")
  .then(function(sortOfGettingItNamesResult){
    res.json(sortOfGettingItNamesResult)

  })
})

app.get('/gettingItNames', function(req,res){
  db.any("SELECT first_name, last_name, comments FROM gettingit")
  .then(function(gettingItNamesResult){
    res.json(gettingItNamesResult)

  })
})

app.post('/VeryLost', function(req, res){

  db.any("INSERT INTO VeryLost (very_lost, first_name, last_name, week_num, comments) VALUES ($1, $2, $3, $4, $5)", [req.body.counter, req.body.user.first_name, req.body.user.last_name, req.body.user.week_num, req.body.user.comments]
  )
  res.end();
})

app.post('/SortOfGettingIt', function(req, res){
  db.any("INSERT INTO SortOfGettingIt (sort_of_getting_it, first_name, last_name, week_num, comments) VALUES ($1, $2, $3, $4, $5)", [req.body.counter, req.body.user.first_name, req.body.user.last_name, req.body.user.week_num, req.body.user.comments])
  res.end();
})

app.post('/GettingIt', function(req, res){
  db.any("INSERT INTO GettingIt(getting_it, first_name, last_name, week_num, comments) VALUES ($1, $2, $3, $4, $5)", [req.body.counter, req.body.user.first_name, req.body.user.last_name, req.body.user.week_num, req.body.user.comments])
  res.end();
})

app.listen(5000,function(req,res){
  console.log("Server has started...")
})