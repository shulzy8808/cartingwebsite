import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductsPage from "./pages/ProductsPage";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route index element={<Homepage/>}/>
          <Route path="/products" element={<ProductsPage/>}/>
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
    </div>
  )
}

export default App;
