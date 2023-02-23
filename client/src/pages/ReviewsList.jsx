import { useEffect, useState } from "react"
import axios from "axios"
import { useParams, useNavigate, Link, useLocation } from "react-router-dom"

const ReviewsList = () => {

    let navigate = useNavigate()
    const { id } = useParams()
    const [allReview, setAllReview] = useState([])

    const getReview = async () => {
        const response = await axios.get(
            `http://localhost:3001/api/themepark/${id}/reviews`
        )
        setAllReview(response.data)
        console.log(response.data)
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
            <div className="reviewContainer">
            <div className="showReview">
                <h2>{review.name}</h2>
                <p>{review.comment}</p>
                <button className="deleteComment-btn" onClick={() =>handleChangeDelete(review._id)}>Delete Comment</button> 
            </div>
            </div>
        )
    })
    return (
        <div>
        <div className="showReviewButton">
            <Link to={`/themepark/${id}/reviews/addreview`}>
                <button className="addReview-btn">Add Review</button>
            </Link>
        </div>
        <div className="showReviewList">
            {showReview}
         </div>
         </div>
    )

}
export default ReviewsList