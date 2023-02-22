import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Details from './pages/Details'
import AddReview from './pages/AddReview'
import Header from './components/Header'
import About from './pages/About'
import ReviewsList from './pages/ReviewsList'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/themepark/:id" element={<Details />} />
          <Route path="/about/" element={<About />} />
          <Route path="/themeparks/:id/reviews" element={<ReviewsList />} />
          <Route path="/themeparks/:id/reviews/addreview" element={<AddReview />} />
        </Routes>
      </main>

    </div>
  )
}
export default App
