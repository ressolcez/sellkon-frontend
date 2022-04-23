import React, { useState,useEffect } from 'react'
import styled from "styled-components";
import ProductFromCategory from './ProductFromCategory';
import { useLocation } from 'react-router-dom'
import HomeService from '../services/HomePageServices';

const StyledContainer = styled.div`
      display: flex;
      margin-top: 40px;
`

const StyledFilter = styled.div`
     display: flex;
     width: 12.5%;
     margin-top: 60px;
     border: 0.5px solid gray;
     border-radius: 20px;
     padding: 10px;
     margin-bottom: 20px;
`

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: 5%;
    width:82.5%;
`;

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



function CategoryContent() {
  
  const location = useLocation()
  const { from } = location.state
  
  const [products, setProducts] = useState([]);

  
  useEffect(() => {
    HomeService.getProductsFromCategory(from).then((response) => {
      setProducts(response.data);
     });
   }, []);
   
  

  return (
    <StyledContainer>
    <StyledFilter>
    <input
          type="checkbox"
          id="topping"
          name="topping"
          value="Paneer"
        />
    </StyledFilter>
    <Container>
    {products.map((product) => (
              <ProductFromCategory item={product} key={product.id} />
        ))}
    </Container>
    </StyledContainer>
  )
}

export default CategoryContent