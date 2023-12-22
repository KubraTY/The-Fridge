const RecipeDetails = () => {

    const [recipe, setRecipe] = useState()
    const { recipeId } = useParams()

    const fetchOneRecipe = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
            if (response.ok) {
              const recipeData = await response.json()
              setRecipe(recipeData)
            }
          } catch (error) {
            console.log(error)
            navigate('/')
          }
    }

    useEffect(() => {
        fetchOneRecipe()
      }, [recipeId])
    
    return recipe? (
        <>
            <h1>Recipe Name</h1>
        </>
    ) : (
        <h1>Loading..</h1>
      )
}

export default RecipeDetails;