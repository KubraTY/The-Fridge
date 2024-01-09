import { useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateRecipe = () => {
    const {recipe,fetchOneRecipe } = useContext(RecipesContext);
    const { recipeId } = useParams() ;
    const navigate = useNavigate()


useEffect(() => {
        fetchOneRecipe(recipeId)
      }, [])

/*const handleSubmit = async event => {
    event.preventDefault()
    const payload = { title, description }

    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/recipes/${recipeId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      if (response.ok) {
        navigate(`/recipeDetail/${recipeId}`)
      }
    } catch (error) {
      console.error(error)
    }
  } */ 
  return (<p>coucou</p>)
  /* return (
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
  )*/
}

export default UpdateRecipe