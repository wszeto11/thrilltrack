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
    <div className='home'>
      <h1 className='themeTitle'>Theme Parks</h1>
      <div className="themeParks">
        {themeParks.map((themePark) => (
          <div key={themePark.name}>
            <Link to={`/themepark/${themePark._id}`} state={{ themePark }}>
              <h3 className='parkName'>
                Theme Park Name: {themePark.name}
              </h3>
              <img src={themePark.image} alt='theme park image' />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Home
