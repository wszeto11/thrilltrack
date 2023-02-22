import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const BASE_URL = `http://localhost:3001`

const Details = () => {

    const [details, setDetails] = useState([])
    let { id } = useParams()

    const getDetails = async () => {
        const response = await axios.get(`${BASE_URL}/themepark/:id`)
        setDetails(response.data.details)
    }

    useEffect(() => {
        getDetails()
    }, [])

    return (
        <div>
            <h1 className='details'>Details</h1>
            {details.map((detail) => (
                <div key={detail._id} className='details'>
                    <p>{detail.name}</p>
                    <p>Location: {detail.location}</p>
                    <p>Description: {detail.description}</p>
                    <p>Rating: {detail.rating}</p>
                </div>
            ))}
        </div>
    )
}
export default Details