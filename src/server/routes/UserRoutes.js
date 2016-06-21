module.exports = function(){
  var express = require('express');
  var app = express();
  // var project = require('../controllers/UserCtrl.js'); 

  // Prefixed by '/project'
  
  app.get('/', function(){
    
  });
  app.get('/:id', function(req, res){
    
  });
  app.post('/', function(){

  });
  app.put('/:id', function(req, res){
    
  });
  app.delete('/:id', function(req, res){
    
  });

  return app;
}();