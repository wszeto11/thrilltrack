const { Review, ThemePark } = require('../models/index')

const createThemePark = async (req, res) => {
    try {
        const themePark = await new ThemePark(req.body)
        await themePark.save()
        return res.status(201).json({
            themePark,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllThemeParks = async (req, res) => {
    try {
        const themeParks = await ThemePark.find()
        return res.status(200).json({ themeParks })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getThemeParkById = async (req, res) => {
    try {
        const { id } = req.params;
        const themePark = await ThemePark.findById(id)
        if (themePark) {
            return res.status(200).json({ themePark });
        }
        return res.status(404).send('Theme Park with the specified ID does not exist');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateThemePark = async (req, res) => {
    try {
        const themePark = await ThemePark.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(themePark)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteThemePark = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await ThemePark.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Theme park deleted');
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



const createReview = async (req, res) => {
    try {
        const { id } = req.params
        req.body = { ...req.body, themeParkId: id }
        const review = await new Review(req.body)
        await review.save()
        return res.status(201).json({
            review,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllReviews = async (req, res) => {
    try {
        const { id } = req.params
        const reviews = await Review.find({ themeParkId: id })
        return res.status(200).json(reviews)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getReviewById = async (req, res) => {
    try {
        const { id } = req.params;
        const review = await Review.findById(id)
        if (review) {
            return res.status(200).json({ review });
        }
        return res.status(404).send('Review with the specified ID does not exist');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateReview = async (req, res) => {
    try {
        const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(review)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteReview = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Review.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Review deleted');
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    createThemePark,
    getAllThemeParks,
    getThemeParkById,
    updateThemePark,
    deleteThemePark,
    createReview,
    getAllReviews,
    getReviewById,
    updateReview,
    deleteReview,
}