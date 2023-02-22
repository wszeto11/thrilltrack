import { useLocation, useNavigate } from 'react-router-dom'

const Details = () => {
    let navigate = useNavigate()
    const location = useLocation()
    const { themepark } = location.state
    console.log(themepark)

    return (
        <div>
            <h1>Details</h1>
        </div>
    )
}
export default Details