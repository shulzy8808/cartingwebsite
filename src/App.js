import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductsPage from "./pages/ProductsPage";
import Checkout from "./pages/Checkout";
import Menwears from "./pages/Menswearpage";
import Womenwears from "./pages/Womenwearpage";
import Sportwears from "./pages/Sportwearspage";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route index element={<Homepage/>}/>
          <Route path="/products" element={<ProductsPage/>}/>
          <Route path="/menwears" element={<Menwears/>}/>
          <Route path="/womenwears" element={<Womenwears/>}/>
          <Route path="/sportwears" element={<Sportwears/>}/>
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
    </div>
  )
}

export default App;
