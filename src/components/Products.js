import React, { useState,useEffect } from 'react'
import styled from "styled-components";
import Product from './Product';
import HomeService from '../services/HomePageServices';


const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
`;

const Products = ({post}) => {
 
  return (
    <Container>
       {post.map((product) => (
              <Product item={product} key={product.id} />
        ))}
    </Container>
  )
}

export default Products