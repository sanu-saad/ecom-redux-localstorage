import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtactedRoute from "./services/ProtactedRoute";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<ProtactedRoute />}>
          <Route path="/product" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
