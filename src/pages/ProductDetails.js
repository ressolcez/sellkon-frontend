import React, { useState,useEffect } from 'react'
import Topbar from '../components/Topbar'
import Footer from '../components/Footer'
import styled from 'styled-components';
import { useLocation } from 'react-router-dom'
import "react-image-gallery/styles/css/image-gallery.css";
import ProductDetailsComponent from '../ProductDetailsComponents/ProductDetailsComponent';
import Divider from '@material-ui/core/Divider';
import {useParams} from "react-router-dom";
import HomePageServices from '../services/HomePageServices';


const StyledDivider = styled(Divider)`
  color: white;
  `

const StyledCont = styled.div `
  width: 80%;
  margin-left: 150px;
`


function ProductDeatails() {
  let { id } = useParams();
  const [products,setProducts] = useState({})

  useEffect(() => {
    HomePageServices.getProductById(id).then((responseProduct) => {
      setProducts(responseProduct.data);
    });
   }, []);
  
  
  return (
    <StyledCont>
      <Topbar decision={0}/>
      <ProductDetailsComponent products = {products}
      />
      <StyledDivider/>
      <Footer/>
   </StyledCont>
  )
}

export default ProductDeatails