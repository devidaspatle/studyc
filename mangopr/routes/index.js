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

router.get('/add_student', function(req, res, next) {
  res.render('add_student');
});

router.get('/edit-student', function(req, res, next) {
  res.render('edit-student');
});

router.get('/view-student', function(req, res, next) {
  res.render('view-student');
});

router.get('/manage-books', function(req, res, next) {
  res.render('manage-books');
});

router.get('/add_book', function(req, res, next) {
  res.render('add_book');
});
router.get('/edit-book', function(req, res, next) {
  res.render('edit-book');
});
router.get('/view-book', function(req, res, next) {
  res.render('view-book');
});


router.get('/manage-payment', function(req, res, next) {
  res.render('manage-payment');
});

router.get('/add_shop', function(req, res, next) {
  res.render('add_shop');
});
router.get('/edit_shop', function(req, res, next) {
  res.render('edit_shop');
});
router.get('/view_shop', function(req, res, next) {
  res.render('view_shop');
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

router.get('/manage-state', function(req, res, next) {
  res.render('manage-state');
});

router.get('/membership-plan', function(req, res, next) {
  res.render('membership-plan');
});

router.get('/manage-user', function(req, res, next) {
  res.render('manage-user');
});



router.get('/add-user', function(req, res, next) {
  res.render('add-user');
});
router.get('/edit-user', function(req, res, next) {
  res.render('edit-user');
});

router.get('/view-user', function(req, res, next) {
  res.render('view-user');
});



router.get('/book-history', function(req, res, next) {
  res.render('book-history');
});

router.get('/add-membership-plan', function(req, res, next) {
  res.render('add-membership-plan');
});

router.get('/manage-advertise', function(req, res, next) {
  res.render('manage-advertise');
});

router.get('/add-advertise', function(req, res, next) {
  res.render('add-advertise');
});

router.get('/manage-product', function(req, res, next) {
  res.render('manage-product');
});

router.get('/add_product', function(req, res, next) {
  res.render('add_product');
});

router.get('/edit_product', function(req, res, next) {
  res.render('edit_product');
});

router.get('/manage-promocode', function(req, res, next) {
  res.render('manage-promocode');
});

module.exports = router;
