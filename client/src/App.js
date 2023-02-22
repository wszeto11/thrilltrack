import './App.css'
// import Nav from './components/Nav'
import About from './pages/About'
// import Reviews from './components/Reviews'
// import AddReview from './components/AddReview'
// import EditReview from './components/EditReview'
import { Routes, Route } from 'react-router-dom'
// import ThemeParkList from './components/ThemeParkList'
import CreateReview from './components/createReview'


const App = () => {
  return (
    <div>
      {/* <Nav /> */}
      <main>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
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
