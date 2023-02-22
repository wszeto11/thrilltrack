import { useEffect, useState } from "react"
import axios from "axios"
import { useParams, useNavigate, Link } from "react-router-dom"
// get all reveiws using axios
//use state, use effect



const ReviewsList = () => {

let navigate=useNavigate()

const [allReview, setAllReview] = useState([])



const getReview = async () => {

const response = await axios.get(
    // `http://localhost:3001/api/themepark/${themepark._id}/review`

)

        setAllReview(response.data.reviews)
        console.log(response)
}


useEffect(() => {

    getReview()
}, [])





const showReview = allReview?.map((review) => {

return(
    <div className="showReview">
        {/* <img src={themePark.image} alt="themepark-Poster"/> */}
        <h2>{review.name}</h2>
        <h2>{review.comment}</h2>
        {/* <h2>{review.themeParkId}</h2> */}

    
    </div>
)

})

return (
    <div className="showReviewButton">
        {/* \ <Link to={`/themeparks/${themepark._id}/reviews/addreview`}>
    <button>Add Review</button>
    </Link>
        {showReview} */}
    </div>
)

}
export default ReviewsList