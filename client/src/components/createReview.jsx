import { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const CreateReview = () => {
  let navigate=useNavigate()
  const { themeParkId } = useParams()

  const initialState = {
    name: '',
    comment:''
  }
  const [createReview, setCreateReview] = useState(initialState)

  const handleChange = (event) => {
    setCreateReview({ ...createReview, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    // await axios.post(`http://localhost:3001/api/themepark/${themepark._id}/review`, createReview)
   navigate(`/themeparks/:id`)

  }


  return (
    <form onSubmit={handleSubmit}>
<h2>Add A Review!</h2>
  <label htmlFor="name"> name:</label>
  <input
    placeholder='Enter full name'
    type="text"
    id="name"
    onChange={handleChange}
    value={createReview.name}
  />
   <label htmlFor="comment">Comment</label>
  <input
  placeholder='Leave review here'
   type="text"
    id="comment"
    onChange={handleChange}
    value={createReview.comment}
  ></input>
 



  <button type="submit">Send</button>
</form>
  )
}

export default CreateReview
