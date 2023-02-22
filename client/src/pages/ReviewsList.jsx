import { useEffect, useState } from "react"
import axios from "axios"
import { useParams, useNavigate, Link, useLocation } from "react-router-dom"

const ReviewsList = () => {

    let navigate = useNavigate()
    const { id } = useParams()
    const [allReview, setAllReview] = useState([])
    const [deleteReview, setDeleteReview] = useState()

    const getReview = async () => {
        const response = await axios.get(
            `http://localhost:3001/api/themepark/${id}/reviews`
        )
        setAllReview(response.data)
        // console.log(response.data)
    }

   
    const handleChangeDelete = async (reviewId) => {


        await  axios.delete(`http://localhost:3001/api/themepark/${reviewId}?`)

        // await  axios.delete(`http://localhost:3001/api/themepark/${reviewId}review/${reviewId}?`)

        // router.delete('/themepark/:id/review/:id', controllers.deleteReview)


        console.log(reviewId)
        getReview()
    }




    useEffect(() => {
        getReview()
    }, [])

    const showReview = allReview?.map((review) => {

        return (
            <div className="showReview">
                <h2>{review.name}</h2>
                <p>{review.comment}</p>
                <button onClick={() =>handleChangeDelete(review._id)}>Delete Comment</button> 
            </div>
        )
    })
    return (
        <div className="showReviewButton">
            <Link to={`/themepark/${id}/reviews/addreview`}>
                <button>Add Review</button>
            </Link>
            {showReview}
        </div>
    )

}
export default ReviewsList