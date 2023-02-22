import { Link, useLocation } from 'react-router-dom'

const Details = () => {
    const locate = useLocation()
    const { park } = locate.state

    // console.log(park)

    return (
        <div className='details-container'>
            <div className='details-contain'>
                <div className='contain'>
                    <h1 className='details'>{park.name}</h1>
                    <img src={park.image} alt='theme park image' />
                    <p>Location: {park.location}</p>
                    <p>Description: {park.description}</p>
                    <p>Rating: {park.rating}</p>
                    <Link to={`/themepark/${park._id}/reviews`} state={{ park }}>
                        <h1>
                            Click here for reviews!
                        </h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Details