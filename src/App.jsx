import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SearchResults from './components/SearchResult';
import AllRecipes from './pages/AllRecipes';
import RecipeDetails from "./pages/RecipeDetails";
import NewRecipe from "./pages/NewRecipe";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import UpdateRecipe from './pages/UpdateRecipe';
import { Route, Routes } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <div className="pageContainer">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/allRecipes" element={<AllRecipes/>} />
        <Route path="/recipeDetail/:recipeId" element={<RecipeDetails />} />
        <Route path="/newRecipe" element={<NewRecipe />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipeDetail/:recipeId/update" element={<UpdateRecipe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
