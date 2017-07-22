const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: 'Please enter the article title'
    },
    slug: String,
    body: {
        type: String,
        trim: true,
        required: 'Please enter the article body'
    },
    tags: [String]
});

articleSchema.pre('save', function(next) {
    if (!this.isModified('title')) {
        return next();
    }
    this.slug = slug(this.title);
    next();
    // todo handle same article names for different slugs

});

module.exports = mongoose.model('Article', articleSchema);
