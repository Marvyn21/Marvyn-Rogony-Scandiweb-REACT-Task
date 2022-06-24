import Home from "./components/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/pages/Product";
import Cart from "./components/pages/Cart";
import CategoryList from "./components/pages/CategoryList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product/:id" component={Product} />
          <Route path="/category/:category" component={CategoryList} />
          <Route path="/cart" component={Cart} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
