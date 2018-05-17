var express = require('express');
var router = express.Router();

/* Importacion del controlador de Quizzes */
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Quiz' });
});

/* GET author page */
router.get('/author', (req, res, next) => {
  res.render('author');
});

/* CURD quizzes */
router.get('/quizzes', quizController.index);
router.get('/quizzes/quizId(\\d+)', quizController.show);
router.get('/quizzes/new', quizController.new);
router.post('/quizzes', quizController.create);
router.get('/quizzes/quizId(\\d+)/edit', quizController.edit);
router.put('/quizzes/quizId(\\d+)', quizController.update);
router.delete('/quizzes/quizId(\\d+)', quizController.destroy);

/* Play quizzes */
router.get('/quizzes/quizId(\\d+)/play', quizController.play);
router.get('/quizzes/quizId(\\d+)/check', quizController.check);

module.exports = router;
