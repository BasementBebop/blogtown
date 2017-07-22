const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', catchErrors(articleController.getArticles));
router.get('/articles', catchErrors(articleController.getArticles));
router.get('/add', articleController.addArticles);
router.post('/add', catchErrors(articleController.createArticle));

module.exports = router;
