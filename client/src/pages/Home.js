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
      console.log(response)
    }
    getThemeParks()
  }, [])
  // console.log(themeParks)
  return (
    <div>
      <h1>Theme Parks</h1>
      <div className="themeParks">
        {themeParks.map((themePark) => (
          <div key={themePark.name}>
            <Link to={`/themepark/${themePark._id}`} state={{ themePark }}>
              <p>
                Name : {themePark.name}<br>
                </br>
                <img src={themePark.image} alt='theme park image' />
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Home
