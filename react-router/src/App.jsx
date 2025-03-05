import {Routes,Route} from "react-router-dom"
import { Home } from "./component/Home"
import { About } from "./component/About"
import { Nav } from "./component/Nav"

function App() {
  return (
    <>
    <Nav/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
     </Routes>
    </>
  )
}

export default App
