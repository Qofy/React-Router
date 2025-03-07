import { Link, Outlet} from "react-router-dom"

export const Product = () => {
  return(
    <>
    <div>
      <input type="search" placeholder="Search" />
    </div>
    <nav>
    <Link to='featured'>Featured</Link>
    <Link to='new'>New</Link>
    </nav>
    <Outlet/>
    </>
  )
}