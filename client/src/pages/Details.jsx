// import { useLocation, useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import { useState, useEffect } from 'react-router-dom'
import { Link } from 'react-router-dom'


const BASE_URL = `http://localhost:3001`

const Details = ({themePark}) => {

    // const [details, setDetails] = useState([])
    // let { id } = useParams()

    // const getDetails = async () => {
    //     const response = await axios.get(`${BASE_URL}/themepark/:id`)
    //     setDetails(response.data.details)
    // }

    // useEffect(() => {
    //     getDetails()
    // }, [])

    return (
        <div>
            <h1 className='details'>Details</h1>
            {/* {details.map((detail) => (
                <div key={detail._id} className='details'> */}
                    <p>{themePark.name}</p>
                    <p>Location: {themePark.location}</p>
                    <p>Description: {themePark.description}</p>
                    <p>Rating: {themePark.rating}</p>
                    <Link to = {`/themeparks/${themePark._id}/reviews`} state={{themePark}}>
                    <h1>
                        Click here for reviews!
                    </h1>
                    </Link>
                {/* </div>
            ))} */}
        </div>
    )
}
export default Details