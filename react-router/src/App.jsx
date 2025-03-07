import {Routes,Route} from "react-router-dom"
import { Home } from "./component/Home"
import { About } from "./component/About"
import { Nav } from "./component/Nav"
import { OrderSummary } from "./component/OrderSummary"
import { NoMatch } from "./component/NoMatch"
import { Product } from "./component/Product"
import { Future } from "./component/Future"
import { New } from "./component/New"

function App() {
  return (
    <>
    <Nav/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="order-sammary" element={<OrderSummary/>}/>
      <Route path="*" element={<NoMatch/>}/>
      <Route path="product" element={<Product/>}>
      <Route path="featured" element={<Future/>}/>
      <Route path="new" element={<New/>}/>
      </Route>
     </Routes>
    </>
  )
}

export default App
