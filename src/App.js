import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ListProductView from "./adminComponents/ListProductView";
import AddProductView from "./adminComponents/AddProductView";
import CategoriesListProduct from "./pages/CategoriesListProduct";
import ListCategoryView from "./adminComponents/ListCategoryView";
import AddCategoryView from "./adminComponents/AddCategoryView";
import ProductDetails from "./pages/ProductDetails";
import { UserContext } from "./context/UserContext";
import React, { useState,useMemo,useEffect } from 'react'
import Cart from "./pages/Cart";
import { CartProvider } from "react-use-cart";

function App() {
  const [user,setUser] = useState('')
  const providerUser = useMemo(() => ({user,setUser}),[user,setUser])

 
  
  useEffect(() => {
    const saved = localStorage.getItem("user");
    const initialValue = JSON.parse(saved);
    if(initialValue === null){
      setUser(0)
    }else{
    setUser(initialValue);
    }

  }, []);

  return (
    <BrowserRouter>
    <CartProvider>
    <UserContext.Provider value = {providerUser}>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route  path="/Login" element={<Login/>}/>
      <Route  path="/Products/:id" element={<Login/>}/>
      <Route  path="/ListProduct" element={<ListProductView/>}/>
      <Route  path="/ListCategory" element={<ListCategoryView/>}/>
      <Route  path="/AddCategory" element={<AddCategoryView/>}/>
      <Route  path="/AddProduct" element={<AddProductView/>}/>
      <Route exact path="/:cateGoryName" element={<CategoriesListProduct/>}/>
      <Route path="/:cateGoryName/:id" element={<ProductDetails/>}/>
      <Route path = "/EditProduct/:id" element = {<AddProductView/>}></Route>
      <Route path = "/Cart" element = {<Cart/>}></Route>
      </Routes>
      </UserContext.Provider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
