const mongoose = require('mongoose');
const Article = mongoose.model('Article');

exports.homePage = (req, res) => {
    req.flash('error', 'bad stuff happened broh, but not really this just a flash');
    res.render('index');
};

exports.addArticle = (req, res) => {
    res.render('editArticle', { title: 'Add Article' });
};


exports.createArticle= async (req, res) => {
    const article = await (new Article(req.body).save());
    req.flash('success', `We did it! ${article.title} created`);
    res.redirect(`/article/${article.slug}`);
};

exports.getArticles = async (req, res) => {
    const articles = await Article.find();
    res.render('articles', { title: 'Articles', articles });
}
