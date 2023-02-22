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
                    <img src={park.image} alt='theme park image' className='themeImage' />
                    <div className='detailsInfo'>

                        <p className='location'>Location: {park.location}</p>
                        <p className='description'>Description: {park.description}</p>
                        <p className='rating'>Rating: {park.rating}</p>
                    </div>
                    <div className='linkContainer'>

                        <Link to={`/themepark/${park._id}/reviews`} state={{ park }} className='link'>
                            <h1 className='reviewLink'>
                                Click here for reviews!
                            </h1>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Details