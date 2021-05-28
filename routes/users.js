var express = require('express');
var router = express.Router();
var userJson = require('./user.json');



router.get('/:id', function(req, res, next) {

  var userDetail = '';
  console.log(req.params.id);
  userJson.map((user, i) => {
    console.log(user.id);
      if(user.id == req.params.id){
        userDetail = user;
      }
  });

  if(!userDetail){
    return res.send({
      "name":"No User Found",
      "id":201
    })
  } else {
    return res.send(userDetail);
  }
  //res.send(JSON.parse(userlist));
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  var userlist = userJson;
  return res.send(userlist);
  //res.send(JSON.parse(userlist));
});

module.exports = router;
