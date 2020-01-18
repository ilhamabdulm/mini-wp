const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    content: {
        type: String,
        required: true
    },
    featured_image:{
        type: String,
    },
    tags: {
        type: [String]
    },
    created_at: {
        type: Date
    }
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article