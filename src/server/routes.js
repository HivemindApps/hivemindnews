var four0four = require('./utils/404')();
var data = require('./data');
var express = require('express'); 
var router = require('express').Router();
var app = express(); 

router.get('/user', getUser); 
router.get('/people', getPeople);
router.get('/person/:id', getPerson);
router.get('/*', four0four.notFoundMiddleware);

app.use('/user', require('./routes/UserRoutes.js')); 

module.exports = router;

//////////////

function getUser(req, res){
  res.status(200).json({"user": "666", })
}

function getPeople(req, res, next) {
  res.status(200).send(data.people);
}

function getPerson(req, res, next) {
  var id = +req.params.id;
  var person = data.people.filter(function(p) {
    return p.id === id;
  })[0];

  if (person) {
    res.status(200).send(person);
  } else {
    four0four.send404(req, res, 'person ' + id + ' not found');
  }
}
