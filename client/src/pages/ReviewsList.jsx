import { useEffect, useState } from "react"
import axios from "axios"
import { useParams, Link } from "react-router-dom"

const ReviewsList = () => {

    const { id } = useParams()
    const [allReview, setAllReview] = useState([])

    const getReview = async () => {
        const response = await axios.get(
            `http://localhost:3001/api/themepark/${id}/reviews`
        )
        setAllReview(response.data)
        console.log(response)
    }
    const handleDelete = async (reviewId) => {
        await axios.delete(`http://localhost:3001/api/themepark/${id}/review/${reviewId}`)
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
                <button onClick={() => handleDelete(review._id)}>Delete</button>
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