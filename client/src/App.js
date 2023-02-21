import './App.css'
import axios from 'axios'
import CreateReview from './components/createReview'
import Home from './pages/Home'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Home />
      <Header />
    </div>
  )
}

export default App
