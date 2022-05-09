import React, { useState,useEffect } from 'react'
import Topbar from '../components/Topbar'
import Footer from '../components/Footer'
import styled from 'styled-components';
import { useLocation } from 'react-router-dom'
import "react-image-gallery/styles/css/image-gallery.css";
import ProductDetailsComponent from '../ProductDetailsComponents/ProductDetailsComponent';
import Divider from '@material-ui/core/Divider';


const StyledDivider = styled(Divider)`
  color: white;
  `

const StyledCont = styled.div `
  width: 80%;
  margin-left: 150px;
`

function ProductDeatails() {
  const location = useLocation()
  const { product_details } = location.state
  
  
  return (
    <StyledCont>
      <Topbar decision={product_details.categoryModel.category_id}/>
      <ProductDetailsComponent product_details = {product_details}/>
      <StyledDivider/>
      <Footer/>
   </StyledCont>
  )
}

export default ProductDeatails