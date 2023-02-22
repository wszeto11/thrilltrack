import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const BASE_URL = `http://localhost:3001/api`

const Home = () => {
  const [themeparks, setThemeParks] = useState([])

  useEffect(() => {
    const getThemeParks = async () => {
      const response = await axios.get(`${BASE_URL}/themeparks`)
      setThemeParks(response.data.themeparks)
      console.log(response)
    }
    getThemeParks()
  }, [])

  return (
    <div>
      <h1>Theme Parks</h1>
      <div className="themeparks">
        {themeparks.map((themepark) => (
          <div key='themepark.name'>
            <Link to={`/themepark/${themepark._id}`} state={{ themepark }}>
              <p>
                Name : {themepark.name}<br>
                </br>{themepark.image}
              </p>
            </Link>
          // </div>
        ))}
      </div>
    </div>
  )
}
export default Home
