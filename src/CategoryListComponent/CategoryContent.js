import React, { useState,useEffect } from 'react'
import styled from "styled-components";
import ProductFromCategory from './ProductFromCategory';
import { useLocation } from 'react-router-dom'
import HomeService from '../services/HomePageServices';
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
    font-size:15px;
    margin-bottom: 8px;
`

const StyledPriceTextPro = styled.div`
display:block;
font-size:15px;
margin-top: 5px;
margin-bottom: 8px;
`

const mystyle = {
  display:'flex',
  flexWrap: 'wrap',
  marginLeft: '5%',
  width:'82.5%'
};

const StyledProducents = styled.div``



function CategoryContent() {
  
  const location = useLocation()
  const { from } = location.state
  
  const [products, setProducts] = useState([]);
  const [filtered,setFiltered] = useState([]);

  const [minPrice,setMinPrice] = useState(0);
  const [maxPrice,setMaxPrice] = useState(20000);
  const [unknow,setUnknow] = useState(0);

 
  const handleProducentsName = () => {
    if(from===1){
      return(
        <div>
          <h3>dell</h3>

        </div>
      );
    }else if(from===2){
       return(
        <div>
          <h3>asus</h3>

        </div>
       );
    }
}

  useEffect(() => {
    
      HomeService.getProductsFromCategoryFilteredByPrice(from,minPrice,maxPrice).then((response) => {
        setFiltered(response.data);
    });

   }, [minPrice,maxPrice]);

console.log(from)
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

  <StyledPriceTextPro>Producenci:</StyledPriceTextPro> 
  <StyledProducents>
  </StyledProducents>
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