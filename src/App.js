import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ListProductView from "./adminComponents/ListProductView";
import AddProductView from "./adminComponents/AddProductView";



function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/Login" element={<Login/>}/>
      <Route exact path="/Products/:id" element={<Login/>}/>
      <Route exact path="/ListProduct" element={<ListProductView/>}/>
      <Route exact path="/AddProduct" element={<AddProductView/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
