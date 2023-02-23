import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const BASE_URL = `http://localhost:3001/api`

const Home = () => {
  const [themeParks, setThemeParks] = useState([])

  useEffect(() => {
    const getThemeParks = async () => {
      const response = await axios.get(`${BASE_URL}/themeparks`)
      setThemeParks(response.data.themeParks)
    }
    getThemeParks()
  }, [])
  // console.log(themeParks)

  return (
    <div className="home">

      <h1 className="themeTitle">Theme Parks From All Around The World</h1>
      <div className="themeParks">
        {themeParks.map((themePark) => (
          <div className="parks" key={themePark.name}>
            <Link
              to={`/themepark/${themePark._id}`}
              state={{ park: themePark }}
              className="parkLinks"
            >
              <h3 className="parkName">{themePark.name}</h3>
              <img
                className="park-img"
                src={themePark.image}
                alt="theme park "
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Home
