import { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const CreateReview = () => {
  let navigate = useNavigate()
  const { id } = useParams()

  const initialState = {
    name: '',
    comment: ''
  }
  const [createReview, setCreateReview] = useState(initialState)

  const handleChange = (event) => {
    setCreateReview({ ...createReview, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post(`/api/themepark/${id}/review`, createReview)
    navigate(`/themepark/${id}/reviews`)
  }


  return (
    <div className="reviewContainer">
      <div className="formBox">
        <form onSubmit={handleSubmit}>
          <h2>Add A Review!</h2>
          <label htmlFor="name"> Name:</label>
          <input
            placeholder='Enter full name'
            type="text"
            id="name"
            className='name'
            onChange={handleChange}
            value={createReview.name}
          />
          <label htmlFor="comment">Comment</label>
          <input
            placeholder='Leave review here'
            type="text"
            id="comment"
            className='comment'
            onChange={handleChange}
            value={createReview.comment}
          ></input>
          <button className="formSubmit-btn" type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default CreateReview
