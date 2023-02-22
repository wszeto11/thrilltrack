import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ThemeParkList from './ThemeParkList'

const BASE_URL = `http://localhost:3000`

const Home = () => {
  const [themeparks, setThemeParks] = useState([])

  useEffect(() => {
    const getThemeParks = async () => {
      const response = await axios.get(`${BASE_URL}/themeparks`)
      setThemeParks(response.data.themeparks)
    }
    getThemeParks()
  }, [])

  return (
    <div>
      <h1>Theme Parks</h1>
      <div className="themeparks">
        {themeparks.map((themepark) => (
          <Link to={`/themepark/${themepark.id}/reviews`}>
            <ThemeParkList
              key={themepark.name}
              name={themepark.name}
              location={themepark.location}
              imageURL={themepark.imageURL}
              rating={themepark.rating}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Home
