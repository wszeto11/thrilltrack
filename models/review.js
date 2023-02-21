const { Schema } = require('mongoose')

const reviewSchema = new Schema(
    {
        name: { type: String, required: true },
        comment: { type: String, required: true },
        themeParkId: { type: Schema.Types.ObjectId, ref: 'themePark' }
    },
    { timestamps: true }
)

module.exports = reviewSchema