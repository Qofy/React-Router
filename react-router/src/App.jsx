import {Routes,Route} from "react-router-dom"
import { Home } from "./component/Home"
import { About } from "./component/About"
import { Nav } from "./component/Nav"
import { OrderSummary } from "./component/OrderSummary"
import { NoMatch } from "./component/NoMatch"

function App() {
  return (
    <>
    <Nav/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="order-sammary" element={<OrderSummary/>}/>
      <Route path="*" element={<NoMatch/>}/>
     </Routes>
    </>
  )
}

export default App
