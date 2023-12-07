var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login Page' });
});

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard');
});
router.get('/manage-student', function(req, res, next) {
  res.render('manage-student');
});

router.get('/manage-books', function(req, res, next) {
  res.render('manage-books');
});

router.get('/manage-payment', function(req, res, next) {
  res.render('manage-payment');
});


router.get('/manage-shop', function(req, res, next) {
  res.render('manage-shop');
});

router.get('/manage-shop-book', function(req, res, next) {
  res.render('manage-shop-book');
});

router.get('/manage-category', function(req, res, next) {
  res.render('manage-category');
});

router.get('/manage-author', function(req, res, next) {
  res.render('manage-author');
});


module.exports = router;
