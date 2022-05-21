import React, { useState,useEffect } from 'react'
import styled from "styled-components";
import ProductFromCategory from './ProductFromCategory';
import { useLocation } from 'react-router-dom'
import HomeService from '../services/HomePageServices';
import {motion} from 'framer-motion'

const StyledContainer = styled.div`
      display: flex;
      margin-top: 50px;
      margin-left:60px;
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
  marginLeft: '2%',
  width:'82.5%',
  height:'100vh'
};

const StyledProducents = styled.div``

function CategoryContent({handleMaxPrice,handleMinPrice,filtered}) {
  

 
  return (
    <StyledContainer>
    <StyledFilter>
    <StyledPriceText>Cena:</StyledPriceText>
    <StyledMinPrice
    placeholder='Min'
    onChange={(e) => handleMinPrice(e.target.value)}
    /> - 
    <StyledMaxPrice
    placeholder='Max'
    onChange={(e) => handleMaxPrice(e.target.value)}

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