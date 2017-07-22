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
    text: {
        type: String,
        trim: true,
        required: 'Please enter the article text'
    },
    tags: [String]
});

articleSchema.pre('save', function(next) {
    if (!this.isModified('title')) {
        return next();
    }
    this.slug = slug(this.title);
    next();
    // todo handle same store names for different slugs

});

module.exports = mongoose.model('Article', storeSchema);
