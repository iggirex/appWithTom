var express = require('express');
var router = express.Router();

function getUser(){
  return knex('user_tbl')
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/clownPorn', function(req, res, next){
  // res.send('you hit m hell')
  res.redirect('/othercall')
})

router.get('/othercall', function(req, res, next){
  res.redirect('/yetAnother')
})

router.get('/yetAnother', function(req, res, next){
  res.render('clownPorn')
})

//inserting into DB
router.post('/clownPorn', function(req, res, next){
  getUser()
  .insert({username: "req.body.username", password: req.body.password})
  .then(function(wooptydoo){
    res.render('watev', {landmark: wooptydoo})
  })
})

//delete from DB
router.post('/delete/:id', function(req, res, next){
  getUser()
  .delete(({username: "req.body.username", password: req.body.password}))
  .then(function(wooptydoo){
    res.render('watev', {landmark: wooptydoo})
  })
})

module.exports = router;
