import { useEffect, useState } from "react"
import axios from "axios"
import { useParams, Link } from "react-router-dom"

const ReviewsList = () => {

    const { id } = useParams()
    const [allReview, setAllReview] = useState([])

    const getReview = async () => {
        const response = await axios.get(
            `/api/themepark/${id}/reviews`
        )
        setAllReview(response.data)
        console.log(response)
    }
    const handleDelete = async (reviewId) => {
        await axios.delete(`/api/themepark/${id}/review/${reviewId}`)
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
                <button className='deleteComment-btn' onClick={() => handleDelete(review._id)}>Delete</button>
            </div>
        )
    })
    return (
        <div className="showReviewButton">
            <div className="addReviewBtn">
                <Link to={`/themepark/${id}/reviews/addreview`}>
                    <button className='addReview-btn'>Add Review</button>
                </Link>
            </div>
            <div className="reviewDisplay">
                {showReview}
            </div>
        </div>
    )

}
export default ReviewsList