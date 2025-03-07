import { NavLink } from "react-router-dom"

export const Nav= () => {

  const navLinkStyles = (isActive) =>{
    return{
      fontWeight : isActive? "bold": 'normal',
      textDecoration: isActive? "none": 'underline'
    }
  }
  return(
    <nav className="primary-nav">
      <NavLink to="/" style={navLinkStyles}>Home</NavLink>
      <NavLink to="/about" style={navLinkStyles}>About</NavLink>
      <NavLink to="/product" style={navLinkStyles}>Product</NavLink>
    </nav>
  )
}