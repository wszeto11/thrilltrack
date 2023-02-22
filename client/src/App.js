import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Header from './components/Header'
import CreateReview from './components/createReview'
import About from './pages/About'



import About from './pages/About'
// import Reviews from './components/Reviews'
// import AddReview from './components/AddReview'
// import EditReview from './components/EditReview'
import { Routes, Route } from 'react-router-dom'
// import ThemeParkList from './components/ThemeParkList'
import CreateReview from './components/createReview'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div>

      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createReview/" element={<CreateReview />} />
          <Route path="/About/" element={<About />} />
      {/* <Nav /> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/themeparks" element={<ThemeParkList />} /> */}
          {/* <Route path="/add-review" element={<AddReview />} /> */}
          {/* <Route path="/themeparks/:id/reviews" element={<Reviews />} /> */}
          {/* <Route path="/themeparks/:id/reviews/:id" /> */}
          {/* <Route path="/review/:id/edit" element={<EditReview />} /> */}

        </Routes>
      </main>

    </div>
  )
}
export default App
