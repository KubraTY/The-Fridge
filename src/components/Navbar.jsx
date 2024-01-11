import classes from '../styles/Navbar.module.css'
import { NavLink } from 'react-router-dom'
import logo from 'src/assets/white-icon.png'

const Navbar = () => {
    return(
        <nav className={classes.navbar}>
        <ul>
            <div className={classes.leftNavbar}>
                <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>   
                <img src={logo}/>
                </NavLink>
            </div>
            <div className={classes.rightNavbar}>
                <NavLink to='/allrecipes' className={({ isActive }) => (isActive ? 'active' : '')}>
                <li>All Recipes</li>
                </NavLink>
                <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : '')}>
                <li>About</li>
                </NavLink>
                <NavLink to='/newRecipe' className={({ isActive }) => (isActive ? 'active' : '')}>
                <li>New Recipe</li>
                </NavLink>
            </div>
        </ul>
        </nav>
    )
}

export default Navbar;