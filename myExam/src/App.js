
import './App.css';
import {Route, Routes} from "react-router-dom";
import {ProductList} from "./Component/productList";
import {AddProduct} from "./Component/addProduct";
import Update from "./Component/Update";
import ProductDetails from "./Component/productDetail";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<ProductList />} />
            <Route path='addProduct' element={<AddProduct />} />
            <Route path='update/:id' element={<Update />} />
            <Route path='product/:id' element={<ProductDetails />} />
        </Routes>
    </div>
  );
}

export default App;
