import {Routes,Route} from "react-router-dom"
import { Home } from "./component/Home"
import { About } from "./component/About"
import { Nav } from "./component/Nav"
import { OrderSummary } from "./component/OrderSummary"

function App() {
  return (
    <>
    <Nav/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="order-sammary" element={<OrderSummary/>}/>
     </Routes>
    </>
  )
}

export default App
