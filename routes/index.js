const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))



router.post('/themepark', controllers.createThemePark)

router.get('/themeparks', controllers.getAllThemeParks)

router.get('/themeparks/:id', controllers.getThemeParkById)

router.put('/themepark/:id', controllers.updateThemePark)

router.delete('/themepark/:id', controllers.deleteThemePark)



router.post('/themepark/:id/review', controllers.createReview)

router.get('/themepark/:id/reviews', controllers.getAllReviews)

router.get('/themepark/:id/reviews/:id', controllers.getReviewById)

router.put('/themepark/:id/review/:id', controllers.updateReview)

router.delete('/themepark/:id/review/:id', controllers.deleteReview)

module.exports = router;