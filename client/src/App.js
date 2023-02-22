import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Header from './components/Header'
import CreateReview from './components/createReview'
import About from './pages/About'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createReview/" element={<CreateReview />} />
          <Route path="/About/" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}
export default App
