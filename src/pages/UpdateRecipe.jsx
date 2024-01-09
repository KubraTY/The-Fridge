import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateRecipePage = () => {
  const { recipeId } = useParams()
  const navigate = useNavigate()
  
  const [recipe, setRecipe] = useState({})


  const fetchOneRecipe = async () => {
    try {
        const response = await fetch(`http://localhost:4000/recipes/${recipeId}`)
        if (response.ok) {
          const recipeData = await response.json()
          setRecipe(recipeData)
        }
      } catch (error) {
        console.log(error)
        navigate('/allrecipes')
      }
}

  useEffect(() => {
    fetchOneRecipe()
  }, [])

  const handleSubmit = async event => {
    event.preventDefault()
    const payload = { title, description }

    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/projects/${projectId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      if (response.ok) {
        navigate(`/projects/${projectId}`)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <h1>Update {recipe.title}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title :
          <input value={title} onChange={event => setTitle(event.target.value)} required />
        </label>
        <label>
          Description :
          <input
            value={description}
            onChange={event => setDescription(event.target.value)}
            required
          />
        </label>
        <button type='submit'>Update</button>
      </form>
    </>
  )
}

export default UpdateProjectPage