import React, { useState,useEffect } from 'react'
import styled from "styled-components";
import ProductFromCategory from './ProductFromCategory';
import { useLocation } from 'react-router-dom'
import HomeService from '../services/HomePageServices';
import Filters from './Filters';
import {motion} from 'framer-motion'

const StyledContainer = styled.div`
      display: flex;
      margin-top: 40px;

`

const StyledFilter = styled.div`
     width: 12.5%;
     margin-top: 60px;
     border: 0.5px solid gray;
     border-radius: 20px;
     padding: 10px;
     margin-bottom: 20px;
`


const StyledMinPrice = styled.input`
      width:70px;
      height: 25px;
      border: 0.5px solid gray;
      border-radius: 20px;
      padding: 5px;
`

const StyledMaxPrice = styled.input`
    width:70px;
    height: 25px;
    border: 0.5px solid gray;
    border-radius: 20px;
    padding: 5px;
`

const StyledPriceText = styled.div`
display:block;
`

const mystyle = {
  display:'flex',
  flexWrap: 'wrap',
  marginLeft: '5%',
  width:'82.5%'
};



function CategoryContent() {
  
  const location = useLocation()
  const { from } = location.state
  
  const [products, setProducts] = useState([]);
  const [filtered,setFiltered] = useState([]);

  const [minPrice,setMinPrice] = useState(0);
  const [maxPrice,setMaxPrice] = useState(20000);
  const [unknow,setUnknow] = useState(0);


  
  useEffect(() => {
      HomeService.getProductsFromCategoryFilteredByPrice(from,minPrice,maxPrice).then((response) => {
        setFiltered(response.data);
    });

   }, [minPrice,maxPrice]);

  
  return (
    <StyledContainer>
    <StyledFilter>
    <StyledPriceText>Cena:</StyledPriceText>
    <StyledMinPrice
    placeholder='Min'
    onChange={(e) => setMinPrice(e.target.value)}
    /> - 
    <StyledMaxPrice
    placeholder='Max'
    onChange={(e) => setMaxPrice(e.target.value)}

    />
    </StyledFilter>
    <motion.div style = {mystyle} layout>
    {filtered.map((product) => {
            return  <ProductFromCategory item={product} key={product.id} />;
       })}
    </motion.div>
    </StyledContainer>
  )
}

export default CategoryContent