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
import Spinner from 'react-bootstrap/Spinner'
import PacmanLoader from "react-spinners/PacmanLoader";

const StyledDivider = styled(Divider)`
  color: white;
  `

const StyledCont = styled.div `
  width: 80%;
  margin-left: 150px;
`

const StyledSpinner = styled.div`text-align:center; margin-top:50vh;`


function ProductDeatails() {
  let { id } = useParams();
  const [products,setProducts] = useState({})
  const [isLoading, setLoading] = useState(true);


  useEffect(() => {
    HomePageServices.getProductById(id).then((responseProduct) => {
      setProducts(responseProduct.data);
      setLoading(false);

    });
   }, []);
  
   if (isLoading) {
    return (
    <StyledSpinner>
        <PacmanLoader color= 'gray'/>
    </StyledSpinner>
    );
  }
  return (
    <StyledCont>
      <Topbar decision={0}/>
      <ProductDetailsComponent products = {products}/>
      <StyledDivider/>
      <Footer/>
   </StyledCont>
  )
}

export default ProductDeatails