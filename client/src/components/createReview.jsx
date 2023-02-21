import { useState } from 'react'
import axios from 'axios'

const CreateReview = (props) => {
  const initialState = {
    name: '',
    location:'',
    description: '',
    image: '',
    rating: ''
  }
  const [createReview, setCreateReview] = useState(initialState)

  const handleChange = (event) => {
    setCreateReview({ ...createReview, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.createReview('http://localhost:3001/api/createReviews', createReview)
    setCreateReview(initialState)

  }


  return (
    <form onSubmit={handleSubmit}>
<h2>Add A Review!</h2>
  <label htmlFor="name"> name:</label>
  <input
    placeholder='name goes here'
    type="text"
    id="name"
    onChange={handleChange}
    value={createReview.name}
  />
   <label htmlFor="location">Location</label>
  <textarea
  placeholder='Location goes here'
   type="text"
    id="location"
    cols="20"
    rows="20"
    onChange={handleChange}
    value={createReview.location}
  ></textarea>
  <label htmlFor="description">Description</label>
  <textarea
  placeholder='Description goes here'
   type="text"
    id="description"
    cols="20"
    rows="20"
    onChange={handleChange}
    value={createReview.description}
  ></textarea>
   <label htmlFor="image">Description Picture</label>
  <textarea
  placeholder='Picture goes here'
   type="text"
    id="image"
    cols="20"
    rows="20"
    onChange={handleChange}
    value={createReview.image}
  ></textarea>

<label htmlFor="rating"> Rating:</label>
  <input
    placeholder='rating goes here'
    type="text"
    id="rating"
    onChange={handleChange}
    value={createReview.rating}
  />


  <button type="submit">Send</button>
</form>
  )
}

export default CreateReview
