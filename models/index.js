const mongoose = require('mongoose')
const reviewSchema = require('./review')
const themeParkSchema = require('./themePark')

const Review = mongoose.model('Review', reviewSchema)
const ThemePark = mongoose.model('ThemePark', themeParkSchema)

module.exports = {
    Review,
    ThemePark
}