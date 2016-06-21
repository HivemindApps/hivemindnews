var thinky = require('thinky')(); 
var type = thinky.type; 

var User = thinky.createModel('User', {
  id: type.string(), 
  username: type.string(), 
  password: type.string(), 
  created_on: type.date(new Date())
});