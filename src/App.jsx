import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SearchResults from './pages/SearchResult';
import AllRecipes from './pages/AllRecipes';
import RecipeDetails from "./pages/RecipeDetails";
import NewRecipe from "./pages/NewRecipe";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { Route, Routes } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <div className="pageContainer">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/searchResult" element={<SearchResults/>} />
        <Route path="/allRecipes" element={<AllRecipes/>} />
        <Route path="/recipeDetail/:recipeId" element={<RecipeDetails />} />
        <Route path="/newRecipe" element={<NewRecipe />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
